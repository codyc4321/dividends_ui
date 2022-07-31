import React from 'react';


const DividendResults = props => {

  const dividends = props.all_dividends.map((dividends_object) => {
    return <h4 key={dividends_object.date}>{dividends_object.date} --- {dividends_object.amount}</h4>
  });

  return (
    <div>{dividends}</div>
  );

};


export default DividendResults;
