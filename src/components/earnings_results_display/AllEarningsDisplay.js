import React from 'react';

// import './DividendResults.css';


const AllEarningsDisplay = (props) => {
  //
  // const dividends = props.all_dividends.map((dividends_object) => {
  //   return <h4 key={dividends_object.date}>{dividends_object.date} --- {dividends_object.amount}</h4>
  // });
  console.log(props)

  let earnings_rows = null;
  if (props.earnings) {
    earnings_rows = props.earnings.map((earnings_object) => {
      let actual = earnings_object.actual;
      if (actual === 'nan') {
        actual = 'no results'
      }
      let expected = earnings_object.expected;
      if (expected === 'nan') {
        expected = 'no results'
      }
      let surprise = earnings_object.surprise;
      if (surprise === 'nan') {
        surprise = '0'
      } else {
        surprise = surprise + '%'
      }
      let color_style = {color: 'green'};
      if (earnings_object.surprise[0] === '-') {
        color_style = {color: 'red'};
      } else if (earnings_object.expected === earnings_object.actual){
        color_style = {color: 'black'}
      }
      return (
        <tr key={earnings_object.date}>
          <td>{earnings_object.date}</td>
          <td>{expected}</td>
          <td style={color_style}>{actual}</td>
          <td style={color_style}>{surprise}</td>
        </tr>
      )
    });
  }


  // const allDividendsDisplaySetting = props.displaySettings.find((dict) => dict.setting_name == 'showAllDividends');
  // let mainDisplay = null;
  // if (allDividendsDisplaySetting.visible) {
    let mainDisplay = (
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
  // }

  return (
    <div>
      <h3>Earnings History
      </h3>
      {mainDisplay}
    </div>
  );

};


export default AllEarningsDisplay;
