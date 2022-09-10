import React from 'react';

import '../earnings_results_display/EarningsDisplay.css';


const MainDividendResultsDisplay = (props) => {

  let dividendCoverageColor = null;
  let dividend_coverage = props.dividend_coverage;
  if (dividend_coverage <= 50) {
    dividendCoverageColor = 'green'
  } else if (dividend_coverage > 50 && dividend_coverage < 100) {
    dividendCoverageColor = 'orange'
  } else if (dividend_coverage >= 100) {
    dividendCoverageColor = 'red'
  }

  if (props.recent_dividend_rate === 0 || props.recent_dividend_rate === '0') {
    dividend_coverage = 'N/A';
    dividendCoverageColor = 'black'
  }

  const dividendCoverageToolTip = (
    <span className="tooltiptext">
      The percentage of a company's earnings the dividend payouts costed. A lower number is better
    </span>
  );

  const earningsToolTip = (<span className="tooltiptext">The earnings per share of stock</span>);

  const yieldToolTip = (<span className="tooltiptext">The dividends paid divided by stock price</span>);

  const yearly_earnings_display = () => {
    const floatNumber = parseFloat(props.recent_earnings_rate);
    let display = null;
    if (floatNumber < 0) {
      const stringNumber = floatNumber.toString()
      const stringNumberSansNegativeSign = stringNumber.slice(1)
      display = "-$" + stringNumberSansNegativeSign
    } else {
      display = "$" + floatNumber
    }
    return display
  }

  let peRatio = '';
  if (props.recent_earnings_rate) {
    const ratio = props.current_price / props.recent_earnings_rate;
    // https://www.jacklmoore.com/notes/rounding-in-javascript/
    peRatio = Number(Math.round(ratio + 'e2') +'e-2')
  }

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
            <td className="tooltip">Yield {yieldToolTip}</td>
            <td className="tooltip">{props.current_yield}% {yieldToolTip}</td>
          </tr>

          <tr>
            <td className="tooltip">Yearly Earnings {earningsToolTip}</td>
            <td className="tooltip">{yearly_earnings_display()} {earningsToolTip}</td>
          </tr>

          <tr>
            <td className="tooltip">Dividend coverage {dividendCoverageToolTip}</td>
            <td
              className="tooltip"
              style={{color: dividendCoverageColor}}>
                {dividend_coverage}{dividend_coverage === 'N/A' ? '' : '%'} {dividendCoverageToolTip}
            </td>
          </tr>
          <tr>
            <td className="tooltip">P/E ratio {dividendCoverageToolTip}</td>
            <td
              className="tooltip">{peRatio} {dividendCoverageToolTip}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default MainDividendResultsDisplay;
