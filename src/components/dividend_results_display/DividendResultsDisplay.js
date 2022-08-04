import React from 'react';

import MainDividendResultsDisplay from './MainDividendResultsDisplay';
import DividendYieldChangeDisplay from './DividendYieldChangeDisplay';
import AllDividendsDisplay from './AllDividendsDisplay';


const DividendResultsDisplay = (props) => {
  return (
    <div>
      <MainDividendResultsDisplay
        current_price={props.data.current_price}
        recent_dividend_rate={props.data.recent_dividend_rate}
        current_yield={props.data.current_yield}
      />
      <br/>
      <DividendYieldChangeDisplay
        dividend_change_1_year={props.data.dividend_change_1_year}
        dividend_change_3_year={props.data.dividend_change_3_year}
        dividend_change_5_year={props.data.dividend_change_5_year}
        dividend_change_10_year={props.data.dividend_change_10_year}
      />
      <br/>
      <AllDividendsDisplay all_dividends={props.data.all_dividends} />
    </div>
  )
};

export default DividendResultsDisplay;
