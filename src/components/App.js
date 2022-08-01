import React from 'react';

import SearchBar from './SearchBar';
import DividendResults from './DividendResults';
import ResultsDisplay from './ResultsDisplay';

import axios from 'axios';


class App extends React.Component {

  state = {
    current_price: null,
    recent_dividend_rate: null,
    current_yield: null,
    dividend_change_1_year: '',
    dividend_change_3_year: '',
    dividend_change_5_year: '',
    dividend_change_10_year: '',
    all_dividends: [],
  }

  onSearchSubmit = async (term) => {
    const base_url = 'http:///localhost:8000';

    const price_url = base_url + '/dividends/current_price/' + term
    const price_response = await axios.get(price_url, {});
    this.setState({current_price: price_response.data['current_price']});

    const recent_rate_url = base_url + '/dividends/recent_dividend_rate/' + term
    const recent_rate_response = await axios.get(recent_rate_url, {});
    this.setState({recent_dividend_rate: recent_rate_response.data['year_dividend_rate']});

    const yield_url = base_url + '/dividends/current_yield/' + term
    const yield_response = await axios.get(yield_url, {});
    this.setState({current_yield: yield_response.data['current_yield']});

    // http://localhost:8000/dividends/dividend_yield_change/psec/10
    const one_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/1';
    const response_1_year_change = await axios.get(one_year_change_url, {});
    this.setState({dividend_change_1_year: response_1_year_change.data['change']});


    const three_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/3';
    const response_3_year_change = await axios.get(three_year_change_url, {});
    this.setState({dividend_change_3_year: response_3_year_change.data['change']});


    const five_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/5';
    const response_5_year_change = await axios.get(five_year_change_url, {});
    this.setState({dividend_change_5_year: response_5_year_change.data['change']});


    const ten_year_change_url = base_url + '/dividends/dividend_yield_change/' + term + '/10';
    const response_10_year_change = await axios.get(ten_year_change_url, {});
    this.setState({dividend_change_10_year: response_10_year_change.data['change']});


    const all_dividends_url = base_url + '/dividends/all_dividends/' + term + '/3';
    const response_all_dividends = await axios.get(all_dividends_url, {});
    this.setState({all_dividends: response_all_dividends.data.reverse()});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ResultsDisplay
          current_price={this.state.current_price}
          recent_dividend_rate={this.state.recent_dividend_rate}
          current_yield={this.state.current_yield}
          dividend_change_1_year={this.state.dividend_change_1_year}
          dividend_change_3_year={this.state.dividend_change_3_year}
          dividend_change_5_year={this.state.dividend_change_5_year}
          dividend_change_10_year={this.state.dividend_change_10_year}
        />

        <h3>The dividend yield change over time...</h3>
        <table>
          <tbody>
            <tr>
              <td>1 year</td>
              <td>{this.state.dividend_change_1_year}%</td>
            </tr>
            <tr>
              <td>3 year</td>
              <td>{this.state.dividend_change_3_year}%</td>
            </tr>
            <tr>
              <td>5 year</td>
              <td>{this.state.dividend_change_5_year}%</td>
            </tr>
            <tr>
              <td>10 year</td>
              <td>{this.state.dividend_change_10_year}%</td>
            </tr>
          </tbody>
        </table>

        <h3>The dividends for the last 3 years:</h3>
        <br/>
        <DividendResults all_dividends={this.state.all_dividends} />
      </div>
    )
  }
}


export default App;
