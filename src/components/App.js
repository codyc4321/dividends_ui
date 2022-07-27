import React from 'react';

import SearchBar from './SearchBar';

import axios from 'axios';


class App extends React.Component {

  state = {current_yield: null}

  onSearchSubmit = async (term) => {
    const url = 'http://localhost:8000/dividends/current_yield/' + term
    console.log(url)
    const response = await axios.get(url, {
      // params: {query: term},
      headers: {  }
    });

    console.log(response);
    console.log("response data:")
    console.log(response.data);
    this.setState({current_yield: response.data['current_yield']});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        The current_yield for this stock is: {this.state.current_yield}
      </div>
    )
  }
}


export default App;
