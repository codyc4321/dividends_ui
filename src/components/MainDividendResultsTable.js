import React from 'react';


class MainDividendResultsTable extends React.Component {

  render() {
    return(
      <div>
        <h2>inside MainDividendResultsTable</h2>
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

export default MainDividendResultsTable;
