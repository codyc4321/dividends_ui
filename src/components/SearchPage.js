
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';
import SettingsView from './settings/SettingsView';
import debounceTerm from '../hooks';


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
  const [settingsViewVisible, setSettingsViewVisible] = useState(false);

  const [showMainInfo, setShowMainInfo] = useState(true);
  const [showYieldChange, setShowYieldChange] = useState(true);
  const [showAllDividends, setShowAllDividends] = useState(true);

  const onTermUpdate = (term) => {
    const trimmed = term.trim()
    setTerm(trimmed);
  }

  // TODO: write a custom hook that debounces taking the term and the set debounced term callback
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedTerm(term);
  //   }, 1500);
  //
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  //
  // }, [term]);
  debounceTerm(setDebouncedTerm, term, 1500);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedDividendYearsBack(dividendsYearsBack);
  //   }, 1500);
  //
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // 
  // }, [dividendsYearsBack]);

  debounceTerm(setDebouncedDividendYearsBack, dividendsYearsBack, 1500);

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
      // .then(response => {
      //   console.log(response)
      // })

  }, [recentSearches])

  const makeSearchApiRequest = () => {
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

  const runSearch = () => {
    console.log("running search: ", term);
    setErrorMessage('');

    if (term) {

      setLoading(true);

      if (!dividendsYearsBack) {
        setDividendsYearsBack('3', () => {
          makeSearchApiRequest()
        });
      } else {
        makeSearchApiRequest()
      }
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
    const trimmed = text.trim()
    setDividendsYearsBack(trimmed);
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
          dividendsYearsBackOnChange={dividendsYearsBackOnChange}
          showMainInfo={showMainInfo}
          showYieldChange={showYieldChange}
          showAllDividends={showAllDividends}/>
      )
    }
  }

  // https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click
  const renderRecentSearches = () => {
    return recentSearches.map((term) => {
      return (
        <div key={term}>
          <button
            onClick={() => recentSearchOnClick(term)}
            style={{marginRight: '10px'}}
            >
              <div>{term} </div>
          </button>
          <button
            onClick={(event) => {event.stopPropagation(); removeRecentSearchOnClick(term)}}>
              X
          </button>
          <br/><br/>
        </div>
      )
    })
  }

  const renderSettingsView = (data) => {
    if (settingsViewVisible) {
      return (
        <SettingsView data={data} />
      )
    } else {
      return null;
    }
  }

  const toggleSettingsView = () => {
    setSettingsViewVisible(!settingsViewVisible);
  }

  const toggleDisplay = (e, setter) => {
    setter(e.target.checked)
  }

  const SETTINGS_DATA = [
    {
      label: 'Main info',
      id: 'main_info',
      toggler: toggleDisplay,
      setter: setShowMainInfo
    },
    {
      label: 'Yield change',
      id: 'yield_change',
      toggler: toggleDisplay,
      setter: setShowYieldChange
    },
    {
      label: 'Dividends list',
      id: 'all_dividends',
      toggler: toggleDisplay,
      setter: setShowAllDividends
    },
  ]

  console.log("showMainInfo: ", showMainInfo);
  console.log("showYieldChange: ", showYieldChange);
  console.log("showAllDividends: ", showAllDividends);

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar term={term} onTermUpdate={onTermUpdate} />
      {renderRecentSearches()}
      <br/><br/>
      <button onClick={toggleSettingsView}>Display settings</button>
      {renderSettingsView(SETTINGS_DATA)}
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
