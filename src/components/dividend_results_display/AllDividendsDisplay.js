import React from 'react';

import './DividendResults.css';
import DisplayToggler from '../shared/DisplayToggler';


const AllDividendsDisplay = (props) => {

  let dividends_rows = null;
  let dividendIncreases = 0;
  let dividendDecreases = 0;

  if (props.all_dividends) {
    dividends_rows = props.all_dividends.map((dividends_object, index) => {
      let amountColor = {color: 'black'};

      if (index + 1 < props.all_dividends.length) {
        const nextDividend = props.all_dividends[index + 1];
        const currentAmount = dividends_object.amount;
        const olderAmount = nextDividend.amount;

        if (currentAmount > olderAmount) {
          amountColor = {color: 'green'};
          dividendIncreases += 1
        }
        if (currentAmount < olderAmount) {
          amountColor = {color: 'red'};
          dividendDecreases += 1
        }
      }

      return (
        <tr key={dividends_object.date}>
          <td>{dividends_object.date}</td>
          <td style={amountColor}>{dividends_object.amount}</td>
        </tr>
      )
    });
  }

  let dividendChangeMessage = '';
  if (dividendIncreases > 0 && dividendDecreases === 0) {
    dividendChangeMessage = 'increasing'
  } else if (dividendIncreases === 0 && dividendDecreases > 0) {
    dividendChangeMessage = 'decreasing'
  } else if (dividendIncreases > 0 && dividendDecreases > 0) {
    dividendChangeMessage = 'inconsistent'
  } else if (dividendIncreases === 0 && dividendDecreases === 0) {
    dividendChangeMessage = 'unchanging'
  }

  const allDividendsDisplaySetting = props.displaySettings.find((dict) => dict.setting_name === 'showAllDividends');
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
      <h3>Dividends for the last &nbsp;
          <input
            type="text"
            style={{width: '48px'}}
            value={props.dividends_years_back}
            onChange={(e) => props.dividendsYearsBackOnChange(e.target.value)}
            /> years:
            <DisplayToggler toggleCallback={props.toggleAllDividends} displaySetting={allDividendsDisplaySetting} />
      </h3>
      <p>Dividends for this stock are {dividendChangeMessage}</p>
      {mainDisplay}
    </div>
  );

};


export default AllDividendsDisplay;
