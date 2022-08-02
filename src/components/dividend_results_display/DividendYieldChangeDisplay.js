import React from 'react';


const DividendYieldChangeDisplay = (props) => {
  return (
    <div>
      <h3>The dividend yield change over time:</h3>
      <table>
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
    </div>
  );
};


export default DividendYieldChangeDisplay;
