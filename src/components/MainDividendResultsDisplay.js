import React from 'react';


class MainDividendResultsDisplay extends React.Component {

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>Price</td>
              <td>${this.props.current_price}</td>
            </tr>

            <tr>
              <td>Yearly dividends</td>
              <td>${this.props.recent_dividend_rate}</td>
            </tr>

            <tr>
              <td>Yield</td>
              <td>{this.props.current_yield}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default MainDividendResultsDisplay;
