import React from 'react';


const DividendYieldChangeDisplay = (props) => {
  let mainDisplay = null;
  if (props.showYieldChange) {
    mainDisplay = (
      <table className="ui celled table">
        <tbody>
          <tr>
            <td>1 year</td>
            <td>{props.dividend_change_1_year}%</td>
          </tr>
          <tr>
            <td>3 year</td>
            <td>{props.dividend_change_3_year}%</td>
          </tr>
          <tr>
            <td>5 year</td>
            <td>{props.dividend_change_5_year}%</td>
          </tr>
          <tr>
            <td>10 year</td>
            <td>{props.dividend_change_10_year}%</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h3>Yield change per year <div style={{cursor: 'pointer'}} onClick={props.yieldChangeToggler}>&nbsp;&nbsp;{props.showYieldChange ? '-' : '+'}&nbsp;&nbsp;</div></h3>
      {mainDisplay}
    </div>
  );
};


export default DividendYieldChangeDisplay;
