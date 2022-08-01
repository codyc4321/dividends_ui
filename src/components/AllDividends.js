import React from 'react';

import './DividendResults.css';


const AllDividends = props => {
  //
  // const dividends = props.all_dividends.map((dividends_object) => {
  //   return <h4 key={dividends_object.date}>{dividends_object.date} --- {dividends_object.amount}</h4>
  // });

  const dividends_rows = props.all_dividends.map((dividends_object) => {
    return (
      <tr key={dividends_object.date}>
        <td>{dividends_object.date}</td>
        <td>{dividends_object.amount}</td>
      </tr>
    )
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {dividends_rows}
        </tbody>
      </table>
    </div>
  );

};


export default AllDividends;
