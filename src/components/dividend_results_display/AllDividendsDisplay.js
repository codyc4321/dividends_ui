import React from 'react';

import './DividendResults.css';


const AllDividendsDisplay = (props) => {
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

  const allDividendsDisplaySetting = props.displaySettings.find((dict) => dict.setting_name == 'showAllDividends');
  let mainDisplay = null;
  if (allDividendsDisplaySetting.visible) {
    mainDisplay = (
      <table className="ui celled table">
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
    )
  }

  return (
    <div>
      <h3>The dividends for the last &nbsp;
          <input
            type="text"
            style={{width: '48px'}}
            value={props.dividends_years_back}
            onChange={(e) => props.dividendsYearsBackOnChange(e.target.value)}
            /> years:
            <div
              style={{cursor: 'pointer'}}
              onClick={props.allDividendsToggler}>
                &nbsp;&nbsp;{props.showAllDividends ? '-' : '+'}&nbsp;&nbsp;
            </div>
      </h3>
      {mainDisplay}
    </div>
  );

};


export default AllDividendsDisplay;
