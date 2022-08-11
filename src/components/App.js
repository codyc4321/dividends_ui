import React from 'react';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';

import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      no_search_term: true,

      dividends_data: {
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
    }
  }

  updateStateData = (key, value) => {
    const data = this.state.dividends_data;
    data[key] = value;
    this.setState({data});
  }

  addResponseKeys = (keys, response) => {
    keys.map((key) => {
      this.updateStateData(key, response.data[key]);
    });
  }

  clearData = () => {
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
  }

  runStockInfoSearch = async (term) => {
    console.log("running search")

    // clear old data
    this.clearData();

    if (term) {
      this.setState({loading: true})
      this.setState({no_search_term: false})

      const HOST = process.env.REACT_APP_HOSTNAME
      const PROTOCOL = process.env.REACT_APP_PROTOCOL
      const PORT = process.env.REACT_APP_PORT
      const base_url = PROTOCOL + '://' + HOST + ':' + PORT
      const dividends_api_url = base_url + '/dividends/' + term

      console.log("hitting url to search- ", dividends_api_url)

      axios.get(dividends_api_url, {})

        .then(response => {

          const RESPONSE_KEYS = [
            'current_price',
            'current_yield',
            'recent_dividend_rate'
          ]
          RESPONSE_KEYS.map((key) => {
            this.updateStateData(key, response.data[key]);
          });

          this.updateStateData('all_dividends', response.data['all_dividends'].reverse());

          const YEARS_CHANGE = [1, 3, 5, 10];
          YEARS_CHANGE.map((year) => {
            const key = 'dividend_change_' + year.toString() + '_year';
            this.updateStateData(key, response.data[key]);
          });

          this.addResponseKeys(['name', 'summary', 'sector'], response);

          // this.updateStateData('name', response.data['name']);
          // this.updateStateData('summary', response.data['summary']);
          // this.updateStateData('sector', response.data['sector']);

          this.setState({loading: false})
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      this.setState({no_search_term: true})
    }
  }

  render() {

    if (this.state.no_search_term === true) {
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar runSearch={this.runStockInfoSearch} />
          <div className="ui segment">
            <div className="ui active">
              <div className="ui text">Search for info about a stock</div>
            </div>
          </div>
        </div>
      )
    }

    if (this.state.loading === true) {
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar runSearch={this.runStockInfoSearch} />
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui text loader">Loading</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (

        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar runSearch={this.runStockInfoSearch} />
          <DividendResultsDisplay
            data={this.state.dividends_data}
          />
        </div>
      )
    }
  }
}



export default App;
