import React from 'react';

import SearchBar from './SearchBar';

import axios from 'axios';


class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('http://localhost:8000/dividends/current_yield/hd', {
      // params: {query: term},
      headers: {
        // Authorization: 'Client-ID *YOUR KEY HERE*'
        // "Access-Control-Allow-Origin": "*",
      }
    }).then(response => {
      console.log(response.data.results);
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}


export default App;
