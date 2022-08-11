
import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';

import axios from 'axios';

const HOST = process.env.REACT_APP_HOSTNAME
const PROTOCOL = process.env.REACT_APP_PROTOCOL
const PORT = process.env.REACT_APP_PORT
const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT

const SearchPage = () => {

  const DEFAULT_STOCK = 'ibm';
  const [term, setTerm] = useState(DEFAULT_STOCK);
  const [debouncedTerm, setDebouncedTerm] = useState(DEFAULT_STOCK);
  const [loading, setLoading] = useState(false);
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

  const runSearch = () => {
    console.log("running search: ", term);
    setErrorMessage('');
    const data = {
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

    if (term) {
      setLoading(true);
      const dividends_api_url = BASE_URL + '/dividends/' + term

      axios.get(dividends_api_url, {})
        .then(response => {
          setLoading(false);

          const RESPONSE_KEYS = [
            'current_price',
            'current_yield',
            'recent_dividend_rate'
          ]
          RESPONSE_KEYS.map((key) => {
            // this.updateStateData(key, response.data[key]);
            data[key] = response.data[key]
          });
          setDividendsData(data);

        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
          setErrorMessage(error.message);
        })
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
          <div className="ui text loader">Loading</div>
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

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar term={term} onTermUpdate={onTermUpdate} />
      <div className="ui segment">
        {renderMainContent()}
      </div>
    </div>
  )


}


export default SearchPage;
