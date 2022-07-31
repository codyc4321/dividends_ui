import React from 'react';

import MainDividendResultsTable from './MainDividendResultsTable';


class ResultsDisplay extends React.Component {

  render() {
    return (
      <MainDividendResultsTable
        current_price={this.props.current_price}
        recent_dividend_rate={this.props.recent_dividend_rate}
        current_yield={this.props.current_yield}
      />
    )
  }
}

export default ResultsDisplay;
