
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
  const [dividendsYearsBack, setDividendsYearsBack] = useState('3');
  const [debouncedDividendYearsBack, setDebouncedDividendYearsBack] = useState('3');
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

  // TODO: write a custom hook that debounces taking the term and the set debounced term callback
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };

  }, [term]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedDividendYearsBack(dividendsYearsBack);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };

  }, [dividendsYearsBack]);

  useEffect(() => {runSearch()}, [debouncedTerm]);

  useEffect(() => {
    // alert(dividendsYearsBack)
    if (dividendsYearsBack !== '') {
      runSearch();
    }
  }, [debouncedDividendYearsBack])

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

      // let dividends_api_url = ''
      // if (!dividendsYearsBack) {
      //   setDividendsYearsBack('3');
      //   let dividends_api_url = BASE_URL + '/dividends/' + term + '/' + '3';
      // } else {
      //   let dividends_api_url = BASE_URL + '/dividends/' + term + '/' + dividendsYearsBack
      // }

      let dividends_api_url = BASE_URL + '/dividends/' + term + '/' + dividendsYearsBack
      
      if (!recentSearches.includes(term)) {
        setRecentSearches([...recentSearches, term])
      }

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

  const removeRecentSearchOnClick = (term) => {
    const searchesWithoutThisOne = recentSearches.filter(search => search !== term)
    setRecentSearches(searchesWithoutThisOne);
  }

  const dividendsYearsBackOnChange = (text) => {
    setDividendsYearsBack(text);
    // if (text) {
    //   setDividendsYearsBack(text);
    // } else {
      // setDividendsYearsBack('3')
    // }

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
        <DividendResultsDisplay
          data={dividendsData}
          dividends_years_back={dividendsYearsBack}
          dividendsYearsBackOnChange={dividendsYearsBackOnChange}/>
      )
    }
  }

  // https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click
  const renderRecentSearches = () => {
    return recentSearches.map((term) => {
      return (
        <button
          onClick={() => recentSearchOnClick(term)}
          style={{marginRight: '10px'}}
          >
            <div>{term} <div onClick={(event) => {event.stopPropagation(); removeRecentSearchOnClick(term)}}>X</div></div>
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
