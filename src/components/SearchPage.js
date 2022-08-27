
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


const SearchPage = ({userId}) => {

  const DEFAULT_STOCK = 'IBM';
  const [term, setTerm] = useState(DEFAULT_STOCK);
  const [debouncedTerm, setDebouncedTerm] = useState(DEFAULT_STOCK);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([DEFAULT_STOCK]);
  const [dividendsYearsBack, setDividendsYearsBack] = useState('3');
  const [debouncedDividendYearsBack, setDebouncedDividendYearsBack] = useState('3');
  const [earningsYearsBack, setEarningsYearsBack] = useState('5');
  const [debouncedEarningsYearsBack, setDebouncedEarningsYearsBack] = useState('5');
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

  debounceTerm(setDebouncedTerm, term, 1500);
  debounceTerm(setDebouncedDividendYearsBack, dividendsYearsBack, 1500);
  debounceTerm(setDebouncedEarningsYearsBack, earningsYearsBack, 1500);

  useEffect(() => {runSearch()}, [debouncedTerm]);

  useEffect(() => {
    // alert(dividendsYearsBack)
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
          // console.log(response)

          const recent_searches_response = response.data.searches;
          const new_recent_searches = [];
          recent_searches_response.map(dict => {
            new_recent_searches.push(dict.search_term)
          })
          setRecentSearches(new_recent_searches);

          setDisplaySettings(response.data.display_settings);
        })
        .catch((error) => {
          console.log("error in getting user profile: ", error.message)
        })
    }
  }, [userId])

  useEffect(() => {
    const user_profile_api_url = BASE_URL + '/users/' + userId
    const request_data = {
      searches: recentSearches,
      display_settings: displaySettings
    }

    axios.post(user_profile_api_url, request_data)
      // .then(response => {
      //   console.log(response)
      // })

  }, [recentSearches, displaySettings])

  const makeSearchApiRequest = () => {
    let dividends_api_url = BASE_URL + '/dividends/' + term + '/' + dividendsYearsBack + '/' + earningsYearsBack;
    console.log("dividends_api_url being requested")
    console.log(dividends_api_url);

    if (!recentSearches.includes(term)) {
      setRecentSearches([...recentSearches, term.toUpperCase()])
    }

    axios.get(dividends_api_url, {})
      .then(response => {
        // console.log(response.data)
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

  const generateYearsBackOnChange = (setter) => {
    return function(text) {
      const trimmed = text.trim();
      const numberOnly = trimmed.match(/\d/g).join``
      const first3 = numberOnly.substring(0, 3);
      setter(first3);
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
      const specifiedSetting = displaySettings.find((dict) => dict.setting_name == setting_name);
      specifiedSetting.visible = !specifiedSetting.visible
      const newDisplaySettings = [...otherSettings, specifiedSetting]
      setDisplaySettings(newDisplaySettings)
    }
  }

  const onTermUpdate = (term) => {
    const trimmed = term.trim()
    setTerm(trimmed);
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
