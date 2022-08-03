import React from 'react';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';

import axios from 'axios';


class App extends React.Component {

  state = {
    current_price: '',
    recent_dividend_rate: '',
    current_yield: '',
    dividend_change_1_year: '',
    dividend_change_3_year: '',
    dividend_change_5_year: '',
    dividend_change_10_year: '',
    all_dividends: [],
  }

  // onSearchSubmit = async (term) => {
  runStockInfoSearch = async (term) => {

    // clear old data
    this.setState({
      current_price: '',
      recent_dividend_rate: '',
      current_yield: '',
      dividend_change_1_year: '',
      dividend_change_3_year: '',
      dividend_change_5_year: '',
      dividend_change_10_year: '',
      all_dividends: [],
    });

    // const host = '67.205.161.47';
    const HOST = 'localhost';
    const base_url = 'http://' + HOST + ':8000'
    const dividends_api_url = base_url + '/dividends/' + term

    axios.get(dividends_api_url, {})
      .then(response => {

        const RESPONSE_KEYS = [
          'current_price',
          'current_yield',
          'recent_dividend_rate'
        ]
        RESPONSE_KEYS.map((key) => {
          this.setState({[key]: response.data[key]})
        })

        this.setState({all_dividends: response.data['all_dividends'].reverse()})

        const YEARS_CHANGE = [1, 3, 5, 10];
        YEARS_CHANGE.map((year) => {
          const key = 'dividend_change_' + year.toString() + '_year';
          this.setState({[key]: response.data[key]})
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log(this.state.current_price)
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <h1>To help on this open source project email Cody at cchilder@mail.usf.edu</h1>
        <SearchBar runSearch={this.runStockInfoSearch} />
        <DividendResultsDisplay
          current_price={this.state.current_price}
          recent_dividend_rate={this.state.recent_dividend_rate}
          current_yield={this.state.current_yield}
          dividend_change_1_year={this.state.dividend_change_1_year}
          dividend_change_3_year={this.state.dividend_change_3_year}
          dividend_change_5_year={this.state.dividend_change_5_year}
          dividend_change_10_year={this.state.dividend_change_10_year}
          all_dividends={this.state.all_dividends}
        />
      </div>
    )
  }
}


export default App;
