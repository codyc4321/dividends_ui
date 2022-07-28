import React from 'react';

import SearchBar from './SearchBar';
import DividendResults from './DividendResults';

import axios from 'axios';


class App extends React.Component {

  state = {
    current_yield: null,
    dividend_change_1_year: null,
    dividend_change_3_year: null,
    dividend_change_5_year: null,
    dividend_change_10_year: null,
    all_dividends: [],
  }

  onSearchSubmit = async (term) => {
    const yield_url = 'http://localhost:8000/dividends/current_yield/' + term
    console.log(yield_url)
    const response = await axios.get(yield_url, {
      // params: {query: term},
      headers: {  }
    });

    console.log(response);
    console.log("response data:")
    console.log(response.data);
    this.setState({current_yield: response.data['current_yield']});

    // http://localhost:8000/dividends/dividend_yield_change/psec/10
    const one_year_change_url = 'http://localhost:8000/dividends/dividend_yield_change/' + term + '/1';
    const response_1_year_change = await axios.get(one_year_change_url, {
      headers: {  }
    });
    this.setState({dividend_change_1_year: response_1_year_change.data['change']});


    const three_year_change_url = 'http://localhost:8000/dividends/dividend_yield_change/' + term + '/3';
    const response_3_year_change = await axios.get(three_year_change_url, {
      headers: {  }
    });
    this.setState({dividend_change_3_year: response_3_year_change.data['change']});


    const five_year_change_url = 'http://localhost:8000/dividends/dividend_yield_change/' + term + '/5';
    const response_5_year_change = await axios.get(five_year_change_url, {
      headers: {  }
    });
    this.setState({dividend_change_5_year: response_5_year_change.data['change']});


    const ten_year_change_url = 'http://localhost:8000/dividends/dividend_yield_change/' + term + '/10';
    const response_10_year_change = await axios.get(ten_year_change_url, {
      headers: {  }
    });
    this.setState({dividend_change_10_year: response_10_year_change.data['change']});


    const all_dividends_url = 'http://localhost:8000/dividends/all_dividends/' + term + '/3';
    const response_all_dividends = await axios.get(all_dividends_url, {
      headers: {  }
    });
    this.setState({all_dividends: response_all_dividends.data.reverse()});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3>The current_yield for this stock is: {this.state.current_yield}%</h3>

        <h3>The 1 year dividend change for this stock is: {this.state.dividend_change_1_year}%</h3>
        <h3>The 3 year dividend change for this stock is: {this.state.dividend_change_3_year}%</h3>
        <h3>The 5 year dividend change for this stock is: {this.state.dividend_change_5_year}%</h3>
        <h3>The 10 year dividend change for this stock is: {this.state.dividend_change_10_year}%</h3>

        <h3>The dividends for the last 3 years:</h3>
        <br/>
        <DividendResults all_dividends={this.state.all_dividends} />
      </div>
    )
  }
}


export default App;
