import React from 'react';

import Citation from '../shared/Citation';


const ArticleThreeTaxes = () => {

  return (
    <div className="ui segment">
      <h3>Ordinary Dividends</h3>
      <div>
        <div style={{float: 'left'}}>
          <h4>Single</h4>
          <table>
            <tr>
              <th>Tax Bracket</th>
              <th>Tax Rate on Regular Income <br/>(Ordinary Dividends)</th>
            </tr>
            <tr>
              <td>&#60; $10,275</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>$10,276 - $41,774</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>$41,775 - $89,074</td>
              <td>22%</td>
            </tr>
            <tr>
              <td>$89,075 - $170,049</td>
              <td>24%</td>
            </tr>
            <tr>
              <td>$170,050 - $215,949</td>
              <td>32%</td>
            </tr>
            <tr>
              <td>$215,950+</td>
              <td>35%</td>
            </tr>
          </table>
        </div>

        <div style={{float: 'left'}}>
          <h4>Married (Filing Jointly)</h4>
          <table style={{width: '35%'}}>
            <tr>
              <th>Tax Bracket</th>
              <th>Tax Rate on Regular Income <br/>(Ordinary Dividends)</th>
            </tr>
            <tr>
              <td>&#60; $20,550</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>$20,551 - $83,549</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>$83,550 - $178,149</td>
              <td>22%</td>
            </tr>
            <tr>
              <td>$178,150 - $340,099</td>
              <td>24%</td>
            </tr>
            <tr>
              <td>$340,100 - $431,899</td>
              <td>32%</td>
            </tr>
            <tr>
              <td>$431,900+</td>
              <td>35%</td>
            </tr>
          </table>
        </div>
      </div>

      <br style={{clear: 'both'}} />

      <h3>Qualified Dividends and Capital Gains</h3>
      <h4>Single</h4>
      <table>
        <tr>
          <th>Tax Bracket</th>
          <th>Tax Rate on <br/>
              Qualified Dividends/Capital Gains</th>
        </tr>
        <tr>
          <td>&#60; $40,400</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>$40,401 - $445,850</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>$445,851+</td>
          <td>20%</td>
        </tr>
      </table>

      <h4>Head of Household</h4>
      <table>
        <tr>
          <th>Tax Bracket</th>
          <th>Tax Rate on <br/>
              Qualified Dividends/Capital Gains</th>
        </tr>
        <tr>
          <td>&#60; $54,100</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>$54,101 - $473,750</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>$473,751+</td>
          <td>20%</td>
        </tr>
      </table>

      <h4>Married (Filing Jointly)</h4>
      <table>
        <tr>
          <th>Tax Bracket</th>
          <th>Tax Rate on <br/>
              Qualified Dividends/Capital Gains</th>
        </tr>
        <tr>
          <td>&#60; $80,800</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>$80,801 - $501,600</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>$501,600+</td>
          <td>20%</td>
        </tr>
      </table>

      <h4>Married (Filing Seperately)</h4>
      <table>
        <tr>
          <th>Tax Bracket</th>
          <th>Tax Rate on <br/>
              Qualified Dividends/Capital Gains</th>
        </tr>
        <tr>
          <td>&#60; $40,400</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>$40,401 - $250,800</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>$250,801+</td>
          <td>20%</td>
        </tr>
      </table>

      <br/><br/>
      <h6>Sources</h6>
      <Citation
        title='"IRS Provides Tax Inflation Adjustments for Tax Year 2022." Internal Revenue Service'
        url="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2022." />
        <Citation
          title='"Topic No. 409 Capital Gains and Losses." Internal Revenue Service'
          url="https://www.irs.gov/taxtopics/tc409." />
    </div>
  )
}


export default ArticleThreeTaxes;
