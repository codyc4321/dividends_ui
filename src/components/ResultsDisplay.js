import React from 'react';

import MainDividendResultsTable from './MainDividendResultsTable';
import DividendYieldChangeDisplay from './DividendYieldChangeDisplay';


class ResultsDisplay extends React.Component {

  render() {
    return (
      <div>
        <MainDividendResultsTable
          current_price={this.props.current_price}
          recent_dividend_rate={this.props.recent_dividend_rate}
          current_yield={this.props.current_yield}
        />
        <br/>
        <DividendYieldChangeDisplay
          dividend_change_1_year={this.props.dividend_change_1_year}
          dividend_change_3_year={this.props.dividend_change_3_year}
          dividend_change_5_year={this.props.dividend_change_5_year}
          dividend_change_10_year={this.props.dividend_change_10_year}
        />
      </div>
    )
  }
}

export default ResultsDisplay;
