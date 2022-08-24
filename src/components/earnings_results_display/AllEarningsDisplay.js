import React from 'react';

// import './DividendResults.css';


const AllEarningsDisplay = (props) => {

  const allEarningsDisplaySetting = props.displaySettings.find((dict) => dict.setting_name == 'showAllEarnings');

  let earnings_rows = null;
  let mainDisplay = null;

  let earningsIsObject = typeof props.earnings === 'object';

  if (allEarningsDisplaySetting.visible) {
    if (earningsIsObject) {
      if (props.earnings.length > 0) {

        earnings_rows = props.earnings.map((earnings_object) => {

          let surprise = earnings_object.surprise;
          if (surprise !== 'no result') {
            surprise = surprise + '%'
          }

          let actual_color_style = null;
          let surprise_color_style = null;

          if (earnings_object.surprise[0] === '-') {
            actual_color_style = {color: 'red'};
            surprise_color_style = {color: 'red'};
          } else if (earnings_object.surprise[0] === '+'){
            actual_color_style = {color: 'green'}
            surprise_color_style = {color: 'green'}
          } else {
            actual_color_style = {color: 'black'}
            surprise_color_style = {color: 'black'}
          }

          if (earnings_object.expected === 'no result') {
            surprise = 'N/A';
            surprise_color_style = {color: 'black'}
          }
          return (
            <tr key={earnings_object.date}>
              <td>{earnings_object.date}</td>
              <td>{earnings_object.expected}</td>
              <td style={actual_color_style}>{earnings_object.actual}</td>
              <td style={surprise_color_style}>{surprise}</td>
            </tr>
          )
        });

        mainDisplay = (
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Expected</th>
                <th>Actual</th>
                <th>Surprise (%)</th>
              </tr>
            </thead>
            <tbody>
              {earnings_rows}
            </tbody>
          </table>
        )

      } else {
        mainDisplay = (
          <h4>There are no earnings results for this stock/ETF. Some funds do not report earnings data.</h4>
        )
      }
    }
  }

  return (
    <div>
      <h3>Earnings History
        <span
          style={{cursor: 'pointer', fontSize: '24px'}}
          onClick={props.toggleAllEarnings}>&nbsp;&nbsp;{allEarningsDisplaySetting.visible ? '-' : '+'}&nbsp;&nbsp;</span>
      </h3>
      {mainDisplay}
    </div>
  );

};


export default AllEarningsDisplay;
