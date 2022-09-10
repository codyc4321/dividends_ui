
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import SearchBar from './SearchBar';
// import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';
import AllEarningsDisplay from './earnings_results_display/AllEarningsDisplay';
import SettingsView from './settings/SettingsView';
import debounceTerm from '../hooks';


const HOST = process.env.REACT_APP_HOSTNAME
const PROTOCOL = process.env.REACT_APP_PROTOCOL
const PORT = process.env.REACT_APP_PORT
const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT
const TITLE_ENDING = " Dividends History, Earnings History, Price, Dividend Yield | Stock History Screener"

const SearchPage = (props) => {

  const userId = props.userId;

  const [loading, setLoading] = useState(false);
  const [dividendsYearsBack, setDividendsYearsBack] = useState('3');
  const [debouncedDividendYearsBack, setDebouncedDividendYearsBack] = useState('3');
  const [earningsYearsBack, setEarningsYearsBack] = useState('5');
  const [debouncedEarningsYearsBack, setDebouncedEarningsYearsBack] = useState('5');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentRequest, setCurrentRequest] = useState(false);
  const [axiosAbortController, setAxiosAbortController] = useState(null);
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
      earnings: [],
      name: '',
      description: '',
    }
  )
  const [displaySettings, setDisplaySettings] = useState([
      {setting_name: 'showYieldChange', visible: true},
      {setting_name: 'showAllDividends', visible: true},
      {setting_name: 'showAllEarnings', visible: true},
  ])
  const [urlPathSearchTerm, setUrlPathSearchTerm] = useState(window.location.pathname.replace("/search", "").replace("/", "").toUpperCase());

  let DEFAULT_STOCK = urlPathSearchTerm;
  if (!DEFAULT_STOCK) {
    DEFAULT_STOCK = 'IBM';
  }
  const [term, setTerm] = useState(DEFAULT_STOCK);
  const [debouncedTerm, setDebouncedTerm] = useState(DEFAULT_STOCK);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    if (urlPathSearchTerm) {
      setTerm(urlPathSearchTerm);
      setDebouncedTerm(urlPathSearchTerm);
      runSearch();
    }
  }, [urlPathSearchTerm])

  debounceTerm(setDebouncedTerm, term, 1500);
  debounceTerm(setDebouncedDividendYearsBack, dividendsYearsBack, 1500);
  debounceTerm(setDebouncedEarningsYearsBack, earningsYearsBack, 1500);

  useEffect(() => {runSearch()}, [debouncedTerm]);

  useEffect(() => {
    if (dividendsYearsBack !== '' && earningsYearsBack !== '') {
      runSearch();
    }
  }, [debouncedDividendYearsBack, debouncedEarningsYearsBack])

  useEffect(() => {
    console.log("user id changed")
    if (userId) {
      const user_profile_api_url = BASE_URL + '/users/' + userId
      axios.get(user_profile_api_url, {})
        .then(response => {

          const recent_searches_response = response.data.searches;
          const saved_recent_searches = [];
          recent_searches_response.map(dict => {
            saved_recent_searches.push(dict.search_term)
          })
          const full_searches = [...recentSearches, ...saved_recent_searches];
          // https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
          let uniqueSearches = full_searches.filter((item, index) => {
            return full_searches.indexOf(item) === index;
          });
          setRecentSearches(uniqueSearches);
          setDisplaySettings(response.data.display_settings);
          if (uniqueSearches !== saved_recent_searches) {
            makeUserprofilePostRequest(uniqueSearches);
          }
        })
        .catch((error) => {
          console.log("error in getting user profile: ", error.message)
        })
    }
  }, [userId])

  useEffect(() => {
    makeUserprofilePostRequest(recentSearches);
  }, [recentSearches, displaySettings])

  const makeUserprofilePostRequest = (searches) => {
    if (userId) {
      const user_profile_api_url = BASE_URL + '/users/' + userId
      const request_data = {
        searches: searches,
        display_settings: displaySettings
      }

      console.log("request data in post to user profile:", request_data)
      axios.post(user_profile_api_url, request_data)
        // .then(response => {
        //   console.log(response)
        // })
    }
  }
  const makeSearchApiRequest = () => {
    let dividends_api_url = BASE_URL + '/dividends/' + term + '/' + dividendsYearsBack + '/' + earningsYearsBack;
    console.log("dividends_api_url being requested")
    console.log(dividends_api_url);

    if (!recentSearches.includes(term)) {
      const  newSearches = [...recentSearches, term.toUpperCase()];
      setRecentSearches(newSearches)
    }

    if (currentRequest) {
      axiosAbortController.abort()
    }

    // https://stackoverflow.com/questions/38329209/how-to-cancel-abort-ajax-request-in-axios

    // https://stackoverflow.com/questions/71137878/how-to-integrate-abortcontroller-with-axios-and-react

    const axiosController = new AbortController();
    setAxiosAbortController(axiosController)

    setCurrentRequest(true);

    axios.get(dividends_api_url, {signal: axiosController.signal})
      .then(response => {
        console.log("the data from dividends api")
        console.log(response.data)
        setLoading(false);
        setCurrentRequest(false);

        setDividendsData(response.data);
        if (response.data.name) {
          document.title = response.data.name + TITLE_ENDING;
        }
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

    const newTitle = term.toUpperCase() + TITLE_ENDING;

    const intendedPath = "/search/" + term.toLowerCase()
    if (window.location.pathname !== intendedPath) {
      window.history.replaceState(null, newTitle, intendedPath)
    }

    // in firefox 9 or later, document.title MUST be updated AFTER window.history.replaceState
    document.title = newTitle;


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
    runSearch();
  }

  const removeRecentSearchOnClick = (term) => {
    const searchesWithoutThisOne = recentSearches.filter(search => search !== term)
    console.log("searchesWithoutThisOne in removeRecentSearchOnClick: ", searchesWithoutThisOne);
    setRecentSearches(searchesWithoutThisOne);
  }

  const generateYearsBackOnChange = (setter) => {
    return function(text) {
      if (!text) {
        setter('');
      } else {
        const trimmed = text.trim();
        const numberOnly = trimmed.match(/\d/g).join``
        const first3 = numberOnly.substring(0, 3);
        setter(first3);
      }
    }
  }

  const generateShowToggler = (setter, state) => {
    return function() {
      setter(!state);
    }
  }

  const generateToggleDisplaySetting = (setting_name) => {
    return function() {
      const otherSettings = displaySettings.filter((dict) => dict.setting_name !== setting_name);
      const specifiedSetting = displaySettings.find((dict) => dict.setting_name === setting_name);
      specifiedSetting.visible = !specifiedSetting.visible
      const newDisplaySettings = [...otherSettings, specifiedSetting]
      setDisplaySettings(newDisplaySettings)
    }
  }

  const onTermUpdate = (term) => {
    if (!term) {
      setTerm('')
    }
    else {
      const trimmed = term.trim()
      const lettersRegex = /^[A-Za-z]+$/;
      const lettersOnly = trimmed.match(lettersRegex).join``
      const upperCased = lettersOnly.toUpperCase();
      setTerm(upperCased);
    }
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
        <div>
          <DividendResultsDisplay
            dividendsData={dividendsData}
            dividends_years_back={dividendsYearsBack}
            dividendsYearsBackOnChange={generateYearsBackOnChange(setDividendsYearsBack)}
            displaySettings={displaySettings}
            toggleYieldChange={generateToggleDisplaySetting('showYieldChange')}
            toggleAllDividends={generateToggleDisplaySetting('showAllDividends')}/>
          <br/>
          <AllEarningsDisplay
            earnings={dividendsData.earnings}
            earningsYearsBack={earningsYearsBack}
            earningsYearsBackOnChange={generateYearsBackOnChange(setEarningsYearsBack)}
            displaySettings={displaySettings}
            toggleAllEarnings={generateToggleDisplaySetting('showAllEarnings')}/>
        </div>
      )
    }
  }

  // https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click
  const renderRecentSearches = () => {
    return recentSearches.map((term) => {
      return (
        <div style={{display: 'inline-block', marginRight: '20px'}} key={term}>
          <button
            onClick={() => recentSearchOnClick(term)}
            style={{marginRight: '0px'}}
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

  // console.log("displaySettings: ", displaySettings);

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
