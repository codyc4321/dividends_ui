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

      dividends_data: {
        current_price: '',
        recent_dividend_rate: '',
        current_yield: '',
        dividend_change_1_year: '',
        dividend_change_3_year: '',
        dividend_change_5_year: '',
        dividend_change_10_year: '',
        all_dividends: [],
      }
    }
  }

  updateStateData = (key, value) => {
    const data = this.state.dividends_data;
    data[key] = value;
    this.setState({data});
  }

  runStockInfoSearch = async (term) => {
    console.log("running search")
    // clear old data
    // this.setState({
    //   loading: true,
    //
    //   current_price: '',
    //   recent_dividend_rate: '',
    //   current_yield: '',
    //   dividend_change_1_year: '',
    //   dividend_change_3_year: '',
    //   dividend_change_5_year: '',
    //   dividend_change_10_year: '',
    //   all_dividends: [],
    // });

    const HOST = 'localhost';
    const base_url = 'http://' + HOST + ':8000'
    const dividends_api_url = base_url + '/dividends/' + term

    axios.get(dividends_api_url, {})
      .then(response => {

        console.log(response.data)

        const RESPONSE_KEYS = [
          'current_price',
          'current_yield',
          'recent_dividend_rate'
        ]
        RESPONSE_KEYS.map((key) => {
          // The old way I did it that worked, but created a messy state with 7 attributes
          // this.setState({dividends_data[key]: response.data[key]});

          // First attempt based on SO answer
          // this.setState(previousState => {
          //   let data = Object.assign({}, previousState.data);
          //   console.log("data: ", data)
          //   data[key] = response.data[key]
          //   return {data}
          // });

          // this.setState(prevState => ({
          //   data: {
          //     ...prevState.data,
          //     [key]: response.data[key],
          //   }
          // }));

          // Another attempt from the answer below the accepted answer
          this.updateStateData(key, response.data[key]);
          // const data = this.state.dividends_data;
          // data[key] = response.data[key];
          // this.setState({data});
        })

        const data = this.state.dividends_data;
        data.all_dividends = response.data['all_dividends'].reverse();
        this.setState({data});


        const YEARS_CHANGE = [1, 3, 5, 10];
        YEARS_CHANGE.map((year) => {
          const key = 'dividend_change_' + year.toString() + '_year';
          const data = this.state.dividends_data;
          data[key] = response.data[key];
          this.setState({data});

          // this.setState({[key]: response.data[key]})
        });

        this.setState({loading: false})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

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
