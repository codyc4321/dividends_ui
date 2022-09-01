import React, {useState} from 'react';

import MainDividendResultsDisplay from './MainDividendResultsDisplay';
import DividendYieldChangeDisplay from './DividendYieldChangeDisplay';
import AllDividendsDisplay from './AllDividendsDisplay';


const DividendResultsDisplay = (props) => {

  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = (event) => {
    setDescriptionVisible(!descriptionVisible);
  }

  const renderDescription = () => {
    if (descriptionVisible) {
      return (
        <p style={{cursor: 'pointer'}} onClick={toggleDescription}>{props.dividendsData.summary}</p>
      )
    } else {
      return (
        <a style={{cursor: 'pointer'}} onClick={toggleDescription}>Description <div className="ui icon caret up"></div></a>
      )
    }
  }

  const mainInfo = (
    <MainDividendResultsDisplay
      current_price={props.dividendsData.current_price}
      recent_dividend_rate={props.dividendsData.recent_dividend_rate}
      current_yield={props.dividendsData.current_yield}
      dividend_coverage={props.dividendsData.dividend_coverage}
    />
  )

  const yieldChange = (
    <DividendYieldChangeDisplay
      displaySettings={props.displaySettings}
      toggleYieldChange={props.toggleYieldChange}
      dividend_change_1_year={props.dividendsData.dividend_change_1_year}
      dividend_change_3_year={props.dividendsData.dividend_change_3_year}
      dividend_change_5_year={props.dividendsData.dividend_change_5_year}
      dividend_change_10_year={props.dividendsData.dividend_change_10_year}
    />
  )

  const allDividends = (
    <AllDividendsDisplay
      displaySettings={props.displaySettings}
      toggleAllDividends={props.toggleAllDividends}
      all_dividends={props.dividendsData.all_dividends}
      dividends_years_back={props.dividends_years_back}
      dividendsYearsBackOnChange={props.dividendsYearsBackOnChange}/>
  )

  return (
    <div>
      <h3>{props.dividendsData.name}</h3>
      <h4>{props.dividendsData.sector}</h4>
      {renderDescription()}
      <br/><br/>
      {mainInfo}
      <br/>
      {yieldChange}
      <br/>
      {allDividends}
    </div>
  )
};

export default DividendResultsDisplay;
