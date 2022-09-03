import React from 'react';

import '../earnings_results_display/EarningsDisplay.css';


const MainDividendResultsDisplay = (props) => {

  let dividendCoverageColor = null;
  if (props.dividend_coverage <= 50) {
    dividendCoverageColor = 'green'
  } else if (props.dividend_coverage > 50 && props.dividend_coverage < 100) {
    dividendCoverageColor = 'orange'
  } else if (props.dividend_coverage >= 100) {
    dividendCoverageColor = 'red'
  }

  const dividendCoverageToolTip = (<span className="tooltiptext">The percentage of a company's earnings the dividend payouts costed. A lower number is better</span>);

  return(
    <div>
      <table className="ui celled table">
        <tbody>
          <tr>
            <td>Price</td>
            <td>${props.current_price}</td>
          </tr>

          <tr>
            <td>Yearly Dividends</td>
            <td>${props.recent_dividend_rate}</td>
          </tr>

          <tr>
            <td>Yield</td>
            <td>{props.current_yield}%</td>
          </tr>

          <tr>
            <td>Yearly Earnings</td>
            <td>${props.recent_earnings_rate}</td>
          </tr>

          <tr>
            <td className="tooltip">Dividend coverage {dividendCoverageToolTip}</td>
            <td
              className="tooltip" 
              style={{color: dividendCoverageColor}}>
                {props.dividend_coverage}{props.dividend_coverage === 'N/A' ? '' : '%'} {dividendCoverageToolTip}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default MainDividendResultsDisplay;
