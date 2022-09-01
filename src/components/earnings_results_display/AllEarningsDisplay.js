import React from 'react';

import DisplayToggler from '../shared/DisplayToggler';

import './EarningsDisplay.css';


const AllEarningsDisplay = (props) => {

  const allEarningsDisplaySetting = props.displaySettings.find((dict) => dict.setting_name == 'showAllEarnings');

  let earnings_rows = null;
  let mainDisplay = null;

  let earningsIsObject = typeof props.earnings === 'object';

  const noEarningToolTip = (<span className="tooltiptext">The company either didn't exist or didn't report earnings that quarter</span>);
  const noSurpriseToolTip = (<span className="tooltiptext">Can't calculate surprise missing a data point</span>);

  const expectedToolTip = (<span className="tooltiptext">The earnings analysts expected</span>);
  const actualToolTip = (<span className="tooltiptext">The actual earnings the company earned</span>);
  const surpriseToolTip = (<span className="tooltiptext">The difference between the actual earnings and what was expected</span>);

  if (allEarningsDisplaySetting.visible) {
    if (earningsIsObject) {
      if (props.earnings.length > 0) {

        earnings_rows = props.earnings.map((earnings_object) => {

          let surprise = earnings_object.surprise;
          if (surprise !== 'no result') {
            surprise = surprise + '%'
          }

          let surprise_color_style = null;
          if (earnings_object.surprise[0] === '-') {
            surprise_color_style = {color: 'red'};
          } else if (earnings_object.surprise[0] === '+'){
            surprise_color_style = {color: 'green'}
          } else {
            surprise_color_style = {color: 'black'}
          }

          let actual_color_style = null;
          if (earnings_object.actual < 0) {
            actual_color_style = {color: 'red'};
          } else if (earnings_object.actual > 0){
            actual_color_style = {color: 'green'}
          } else {
            actual_color_style = {color: 'black'}
          }

          if (earnings_object.expected === 'no result') {
            surprise = 'N/A';
            surprise_color_style = {color: 'black'}
          }
          return (
            <tr key={earnings_object.date}>
              <td>{earnings_object.date}</td>
              <td className="tooltip">{earnings_object.expected}
                {earnings_object.expected === 'no result' ? noEarningToolTip: expectedToolTip}
                </td>
              <td className="tooltip" style={actual_color_style}>{earnings_object.actual}
                {earnings_object.actual === 'no result' ? noEarningToolTip: actualToolTip}
              </td>
              <td className="tooltip" style={surprise_color_style}>{surprise} {surprise === 'N/A' ? noSurpriseToolTip : surpriseToolTip}</td>
            </tr>
          )
        });

        mainDisplay = (
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Date</th>
                <th className="tooltip">Expected {expectedToolTip}</th>
                <th className="tooltip">Actual {actualToolTip}</th>
                <th className="tooltip">Surprise (%) {surpriseToolTip}</th>
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
      <h3>Earnings history for the last &nbsp;
      <input
        type="text"
        style={{width: '48px'}}
        value={props.earningsYearsBack}
        onChange={(e) => props.earningsYearsBackOnChange(e.target.value)}
        /> years
        <DisplayToggler toggleCallback={props.toggleAllEarnings} displaySetting={allEarningsDisplaySetting} />
      </h3>
      {mainDisplay}
    </div>
  );

};


export default AllEarningsDisplay;
