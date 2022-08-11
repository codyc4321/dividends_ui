
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

  const onTermUpdate = (term) => {
    setTerm(term)
  }

  console.log(term);

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar term={term} onTermUpdate={onTermUpdate} />
      <div className="ui segment">
      </div>
    </div>
  )


}


export default SearchPage;
