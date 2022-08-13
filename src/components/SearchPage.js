
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';

const HOST = process.env.REACT_APP_HOSTNAME
const PROTOCOL = process.env.REACT_APP_PROTOCOL
const PORT = process.env.REACT_APP_PORT
const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT

const SearchPage = ({userId}) => {

  const DEFAULT_STOCK = 'ibm';
  const [term, setTerm] = useState(DEFAULT_STOCK);
  const [debouncedTerm, setDebouncedTerm] = useState(DEFAULT_STOCK);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([DEFAULT_STOCK]);
  const [errorMessage, setErrorMessage] = useState('');
  const [dividendsData, setDividendsData] = useState(
    {
      current_price: '',
      recent_dividend_rate: '',
      current_yield: '',
      dividend_change_1_year: '',
      dividend_change_3_year: '',
      dividend_change_5_year: '',
      dividend_change_10_year: '',
      all_dividends: [],
      name: '',
      description: '',
    }
  )

  const onTermUpdate = (term) => {
    setTerm(term)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };

  }, [term]);

  useEffect(() => {runSearch()}, [debouncedTerm]);

  useEffect(() => {
    console.log("user id changed")
    if (userId) {
      const user_profile_api_url = BASE_URL + '/users/' + userId
      axios.get(user_profile_api_url, {})
        .then(response => {
          const recent_searches_response = response.data.searches;
          const new_recent_searches = [];
          recent_searches_response.map(dict => {
            new_recent_searches.push(dict.search_term)
          })
          setRecentSearches(new_recent_searches);
        })
        .catch((error) => {
          console.log("error in getting user profile: ", error.message)
        })
    }
  }, [userId])

  useEffect(() => {
    const user_profile_api_url = BASE_URL + '/users/' + userId
    const request_data = {searches: recentSearches}

    // axios.post(user_profile_api_url, {
    //   params: {
    //     searches: recentSearches
    //   }
    // })

    // const response = await axios.post(user_profile_api_url, data);
    // console.log(response)

    console.log('data: ', request_data)
    axios.post(user_profile_api_url, request_data)
      .then(response => {
        console.log(response)
      })
  }, [recentSearches])

  const runSearch = () => {
    console.log("running search: ", term);
    setErrorMessage('');

    if (term) {
      setLoading(true);

      if (!recentSearches.includes(term)) {
        setRecentSearches([...recentSearches, term])
      }
      const dividends_api_url = BASE_URL + '/dividends/' + term

      axios.get(dividends_api_url, {})
        .then(response => {
          // console.log(response)
          setLoading(false);
          setDividendsData(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
          setErrorMessage(error.message);
        })
    }
  }

  const recentSearchOnClick = (term) => {
    setTerm(term);
    setDebouncedTerm(term);
  }

  const renderMainContent = () => {
    if (!debouncedTerm) {
      return (
        <div className="ui active">
          <div className="ui text">Search for info about a stock</div>
        </div>
      )
    }
    if (loading === true) {
      return (
        <div className="ui active dimmer">
          <div className="ui big text loader">Loading</div>
        </div>
      )
    }
    if (errorMessage) {
      return (
        <div className="ui active">
          <div className="ui text">{errorMessage}</div>
        </div>
      )
    } else {
      return (
        <DividendResultsDisplay data={dividendsData}/>
      )
    }
  }

  const renderRecentSearches = () => {
    return recentSearches.map((term) => {
      return (
        <button
          onClick={() => recentSearchOnClick(term)}
          style={{marginRight: '10px'}}
          >
            {term}
        </button>
      )
    })
  }

  console.log("searches", recentSearches)

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar term={term} onTermUpdate={onTermUpdate} />
      {renderRecentSearches()}
      <div className="ui segment">
        {renderMainContent()}
      </div>
    </div>
  )


}


const mapStateToProps = state => {
  return { userId: state.auth.userId };
};

export default connect(
  mapStateToProps
)(SearchPage);

// export default SearchPage;
