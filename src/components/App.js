import React from 'react';

import SearchBar from './SearchBar';
import AllDividends from './dividend_results_display/AllDividends';
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

    // http://localhost:8000/dividends/dividend_yield_change/psec/10
    const one_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/1';
    axios.get(one_year_change_url, {})
      .then(response => {
        this.setState({dividend_change_1_year: response.data['change']});
      })
      .catch(err => {
        console.log(err);
      })

    const three_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/3';
    axios.get(three_year_change_url, {})
      .then(response => {
        this.setState({dividend_change_3_year: response.data['change']});
      })
      .catch(err => {
        console.log(err);
      })


    const five_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/5';
    axios.get(five_year_change_url, {})
      .then(response => {
        this.setState({dividend_change_5_year: response.data['change']});
      })
      .catch(err => {
        console.log(err);
      })

    const ten_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/10';
    axios.get(five_year_change_url, {})
      .then(response => {
        this.setState({dividend_change_10_year: response.data['change']});
      })
      .catch(err => {
        console.log(err);
      })

    const all_dividends_url = base_url + '/dividends/all_dividends/' + term + '/3';
    axios.get(all_dividends_url, {})
      .then(response => {
        this.setState({all_dividends: response.data.reverse()});
      })
      .catch(err => {
        console.log(err);
      })

    // const response_all_dividends = await axios.get(all_dividends_url, {});
    // this.setState({all_dividends: response_all_dividends.data.reverse()});
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
        <br/>
        <AllDividends all_dividends={this.state.all_dividends} />
      </div>
    )
  }
}


export default App;
