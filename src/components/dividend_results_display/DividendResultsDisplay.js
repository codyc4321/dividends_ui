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
        <p style={{cursor: 'pointer'}} onClick={toggleDescription}>{props.data.summary}</p>
      )
    } else {
      return (
        <a style={{cursor: 'pointer'}} onClick={toggleDescription}>Description <div className="ui icon caret up"></div></a>
      )
    }
  }

  return (
    <div>
      <h3>{props.data.name}</h3>
      <h4>{props.data.sector}</h4>
      {renderDescription()}
      <br/><br/>
      <MainDividendResultsDisplay
        current_price={props.data.current_price}
        recent_dividend_rate={props.data.recent_dividend_rate}
        current_yield={props.data.current_yield}
      />
      <br/>
      <DividendYieldChangeDisplay
        dividend_change_1_year={props.data.dividend_change_1_year}
        dividend_change_3_year={props.data.dividend_change_3_year}
        dividend_change_5_year={props.data.dividend_change_5_year}
        dividend_change_10_year={props.data.dividend_change_10_year}
      />
      <br/>
      <AllDividendsDisplay
        all_dividends={props.data.all_dividends}
        dividends_years_back={props.dividends_years_back}
        dividendsYearsBackOnChange={props.dividendsYearsBackOnChange}/>
    </div>
  )
};

export default DividendResultsDisplay;
