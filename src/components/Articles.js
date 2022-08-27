import React from 'react';
import {Link} from 'react-router-dom';

const Articles = () => {
  return (
    <div className="ui segment">
      <Link to="/articles/dividend-aristocrats" className="item">
        Dividend Kings and Aristocrats
      </Link>
      <br/><br/>
      <Link to="/articles/dividends-vs-growtb" className="item">
        Dividend stocks vs. growth stocks
      </Link>
    </div>
  )
}

export default Articles;
