import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/search" className="item">
          Search
        </Link>
        <Link to="/articles" className="item">
          Articles
        </Link>
        {/*<GoogleAuth />*/}
      </div>
    </div>
  )
}

export default Header;
