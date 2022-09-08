import React from 'react';


const HomePage = () => {

  document.title = "Stock History Screener | Free Investing Tool";

  return (
    <div className="ui segment">
      <body>
      		<p>Welcome to <a href="/search">stockhistoryscreener.com</a>, your one stop shop for the most thorough tabulation of historical financial data for the stock market.</p>

          <p>Research the ticker symbols you care about and receive current information about:
          <ul>
            <li>price and dividend yield</li>
            <li>dividend yield change over time</li>
            <li>all recent dividends going back roughly 25 years</li>
            <li>earnings per share history going back roughly 25 years</li>
          </ul>
          New features being are added weekly or monthly. </p>
      		<p>This site is for your benefit, so please send feature requests, bugs, and comments to &nbsp;
          <a href="mailto:stockhistoryscreener@gmail.com">stockhistoryscreener@gmail.com</a>.
          Bug fixes are prioritized first while excellent feature requests move to the top of the new feature list.</p>

          <p>You can find ideas about stocks to research here at great websites such as &nbsp;
          <a href="//www.suredividend.com" target="_blank">Sure Dividend</a>&nbsp;,&nbsp;
          <a href="//www.seekingalpha.com" target="_blank">Seeking Alpha</a>, and &nbsp;
          <a href="//www.fool.com" target="_blank">Motley Fool</a>.</p>

           <p>Sign up for their email list and look up the ticker symbols they provide you here.</p>

           <p>Welcome to <a href="/search">stockhistoryscreener.com</a>, may you reach your financial dreams in due time!</p>
      	</body>
    </div>
  )
}

export default HomePage;
