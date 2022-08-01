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

  onSearchSubmit = async (term) => {

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


    const base_url = 'http:///localhost:8000';

    const price_url = base_url + '/dividends/current_price/' + term
    axios.get(price_url, {})
      .then(response => {
        this.setState({current_price: response.data['current_price']});
      })
      .catch(err => {
        console.log(err);
      })

    const recent_rate_url = base_url + '/dividends/recent_dividend_rate/' + term
    axios.get(recent_rate_url, {})
      .then(response => {
        this.setState({recent_dividend_rate: response.data['year_dividend_rate']});
      })
      .catch(err => {
        console.log(err);
      })

    const yield_url = base_url + '/dividends/current_yield/' + term
    axios.get(yield_url, {})
      .then(response => {
        this.setState({current_yield: response.data['current_yield']});
      })
      .catch(err => {
        console.log(err);
      })

    const YEARS = [1, 3, 5, 10];

    YEARS.map(year => {
      const URL = base_url + '/dividends/dividend_yield_change/' + term + '/' + year.toString();
      const OBJECT_KEY = 'dividend_change_' + year.toString() + '_year';
      axios.get(URL, {})
        .then(response => {
          this.setState({[OBJECT_KEY]: response.data['change']});
        })
        .catch(err => {
          console.log(err);
        });
    });

    const all_dividends_url = base_url + '/dividends/all_dividends/' + term + '/3';
    axios.get(all_dividends_url, {})
      .then(response => {
        this.setState({all_dividends: response.data.reverse()});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
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
