import React from 'react';


const MainDividendResultsDisplay = (props) => {
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>Price</td>
            <td>${props.current_price}</td>
          </tr>

          <tr>
            <td>Yearly dividends</td>
            <td>${props.recent_dividend_rate}</td>
          </tr>

          <tr>
            <td>Yield</td>
            <td>{props.current_yield}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default MainDividendResultsDisplay;
