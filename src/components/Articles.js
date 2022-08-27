import React from 'react';
import {Link} from 'react-router-dom';

const Articles = () => {
  return (
    <div className="ui segment">
      <Link to="/articles/1" className="item">
        Dividend Kings and Aristocrats
      </Link>
    </div>
  )
}

export default Articles;
