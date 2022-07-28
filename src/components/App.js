import React from 'react';

import SearchBar from './SearchBar';

import axios from 'axios';


class App extends React.Component {

  state = {current_yield: null, dividend_change: null}

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
    const change_url = 'http://localhost:8000/dividends/dividend_yield_change/' + term + '/5';
    console.log(change_url);
    const response_2 = await axios.get(change_url, {
      // params: {query: term},
      headers: {  }
    });

    console.log(response_2);
    console.log("response data:");
    console.log(response_2.data);
    this.setState({dividend_change: +.data['change']});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        The current_yield for this stock is: {this.state.current_yield}
        <br/>
        The 5 year dividend change for this stock is: {this.state.dividend_change}
      </div>
    )
  }
}


export default App;
