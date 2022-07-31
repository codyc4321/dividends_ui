import React from 'react';


class MainDividendResultsTable extends React.Component {

  render() {
    return (
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
    );
  }
};

export default MainDividendResultsTable;
