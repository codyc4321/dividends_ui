import React from 'react';
import {Link} from 'react-router-dom';

const Articles = () => {
  return (
    <div className="ui segment">

      <h4>Intro</h4>
      <Link to="/articles/why-invest" className="item">
        Why Invest?
      </Link>
      <br/><br/>
      <Link to="/articles/investing-basics" className="item">
        Basics of Investing
      </Link>
      <br/>

      <h4>Stocks</h4>
      <Link to="/articles/dividend-aristocrats" className="item">
        Dividend Kings and Aristocrats
      </Link>
      <br/><br/>
      <Link to="/articles/dividends-vs-growth" className="item">
        Dividend Stocks vs. Growth Stocks
      </Link>
      <br/><br/>
      <Link to="/articles/taxes" className="item">
        Taxes for Dividends and Capital Gains
      </Link>
      <br/>

      <h4>Bonds</h4>
      <Link to="/articles/fake" className="item">
        Types of Bonds
      </Link>
      <br/><br/>
      <Link to="/articles/fake" className="item">
        blah
      </Link>
      <br/><br/>
      <Link to="/articles/fake" className="item">
        blah
      </Link>
      <br/>

      <h3>Alternative Investments</h3>

      <h4>Real Estate</h4>
      <Link to="/articles/reit-basics" className="item">
        How do I Invest in Real Estate (What are REITs)?
      </Link>
      <br/><br/>
      <Link to="/articles/reit-taxes" className="item">
        What are the Tax Implications of REITs
      </Link>
      <br/><br/>
      <Link to="/articles/reit-analyze" className="item">
        How to Analyze Different REITs
      </Link>
      <br/>

      <h4>Commodities</h4>
      <Link to="/articles/commodities-basics" className="item">
        How do I Invest in Commodities (What are Commodities)?
      </Link>
    </div>
  )
}

export default Articles;
