import React from 'react';
import {Link} from 'react-router-dom';

const Articles = () => {
  return (
    <div className="ui segment">
      <Link to="/articles/dividend-aristocrats" className="item">
        Dividend Kings and Aristocrats
      </Link>
      <br/><br/>
      <Link to="/articles/dividends-vs-growth" className="item">
        Dividend stocks vs. growth stocks
      </Link>
      <br/><br/>
      <Link to="/articles/taxes" className="item">
        Taxes for dividends and capital gains
      </Link>
    </div>
  )
}

export default Articles;
