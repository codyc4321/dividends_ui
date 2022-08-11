
import React from 'react';

import SearchBar from './SearchBar';
import AllDividendsDisplay from './dividend_results_display/AllDividendsDisplay';
import DividendResultsDisplay from './dividend_results_display/DividendResultsDisplay';

import axios from 'axios';

const HOST = process.env.REACT_APP_HOSTNAME
const PROTOCOL = process.env.REACT_APP_PROTOCOL
const PORT = process.env.REACT_APP_PORT
const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT


class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      no_search_term: true,

      recent_searches: ['wba', 'hd', 'alty'],

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

  addSearchTerm = (term) => {
    const data = this.state.recent_searches;
    if (!data.includes(term)) {
      data.push(term)
      this.setState({data});
    }
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

      this.addSearchTerm(term);

      const dividends_api_url = BASE_URL + '/dividends/' + term
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

          this.setState({loading: false})
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      this.setState({no_search_term: true})
    }
  }

  renderMainContent() {
    if (this.state.no_search_term === true) {
      return (
        <div className="ui active">
          <div className="ui text">Search for info about a stock</div>
        </div>
      )
    }
    if (this.state.loading === true) {
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      )
    } else {
      return (
        <DividendResultsDisplay data={this.state.dividends_data}/>
      )
    }
  }

  renderRecentSearches() {
    return this.state.recent_searches.map((term) => {
      return (
        <button style={{marginRight: '10px'}}>{term}</button>
      )
    })
  }

  render() {
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar runSearch={this.runStockInfoSearch} />
          {this.renderRecentSearches()}
          <div className="ui segment">
            {this.renderMainContent()}
          </div>
        </div>
      )


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



export default SearchPage;
