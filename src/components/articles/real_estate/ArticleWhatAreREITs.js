import authors from '../authors';

import TickerLink from '../../shared/TickerLink';
import MyLink from '../../shared/MyLink';

const body = (
  <div>
    <p>REIT stands for real estate investment trusts. REITs allow investors that may not want to invest hundreds of thousands of dollars into their own
    real estate the chance to purchase a small sliver of profitable real estate companies.</p>
    <p><a href="https://www.reit.com/what-reit" target="_blank" style={{color: 'black'}}>"REITs, or real estate investment trusts, are companies that own or finance income-producing real estate across a range of
    property sectors. These real estate companies have to meet a number of requirements to qualify as REITs. Most REITs trade on major stock exchanges,
    and they offer a number of benefits to investors."</a></p>
    <p>REITs are readily accessible to investors by being traded on the stock market, being sold in mutual funds, or being sold in REIT ETFs.
    While a REIT is a trust that owns multiple properties or multiple mortgages to real estate, a REIT ETF is a collection of several REITs in one fund.
    One of the most popular real estate ETFs is Vanguard's <TickerLink ticker="VNQ"/>. Three of the top holdings in <TickerLink ticker="VNQ"/> are&nbsp;
    <MyLink path="/search/amt" text="American Tower Corp" />, <MyLink path="/search/pld" text="Prologis" />, and&nbsp;
    <MyLink path="/search/cci" text="Crown Castle Inc" />.</p>
    <p>The 2 main types of REITs are equity REITs, which are funds that own and operate real estate for income, and mortgage REITs, which
    invest in mortgages of various real estate and receive interest payments from borrowers.</p>
    <p>Organizations that want to become real estate investment trusts have numerous requirements:</p>
    <ul>
      <li>Must pay at least 90% of its taxable income as dividends to shareholders (this is our favorite requirement)</li>
      <li>Must invest at least 75% of its assets in real estate</li>
      <li>Must earn at least 75% of its income from rents collected, interest on mortgages loaned out, or sales of real estate</li>
      <li>Must be taxable as a corporation</li>
      <li>Must be managed by a board</li>
      <li>Must have a minimum of 100 shareholders</li>
      <li>Must not have more than 50% of its shares held by 5 or less people</li>
    </ul>
    <p>If a company can meet these requirements, it can avoid paying corporate income tax on its earnings
    (you, the shareholder, still have to pay some taxes on dividends paid).</p>
    <p>The majority of REITs are equity REITs and provide income by buying real property, improving it, and leasing it out to families, corporations,
    or the government. There are numerous real estate types of equity REITs. See [ADD LINK TO REAL ESTATE SECTORS] for
    more information on the types of properties these funds rent out.</p>

    <h4>Why invest in REITs?</h4>
    <p>REITs have numerous advantages for investors who purchase them.</p>

    <h5>Liquidity</h5>
    <p>First off, they are relatively liquid. Take <MyLink path="/search/o" text="Realty Income" />, a very popular time-tested REIT.
    As of September 1, 2022, Realty Income had an average of 3,600,000 shares traded each day. It is much easier and faster to sell your investments
    in real estate than to say, sell a house or condo, which could take several months to sell.</p>

    <h5>Diversification</h5>
    <p>Real estate provides a unique advantage over other investments in that it is not very correlated to the price of stocks and bonds.
    This provides a substantial benefit in that you could sell your REITs for the price you paid, or even at a profit, when the stock and bond market is
    crashing. If you had all your money in traditional investments, and you need to raise cash now by selling, you would take a large loss if the
    market was down.</p>

    <h5>Performance</h5>
    <p>Real estate trusts provide total returns (dividends plus appreciation) on par with that of the general stock market.</p>
    <p>In fact, real estate has <a href="https://www.reit.com/what-reit/reit-basics" target="_blank">outperformed the famous S&P 500</a> over the past 25 years,
    and <a href="https://www.reit.com/what-reit" target="_blank">outperformed the Russell indexes</a> over the past 30 years</p>

    <h5>Dividends</h5>
    <p>Investments that pay dividends lower volatility as you are still earning income even if stock prices are down. </p>
    <p>REITs pay relatively high dividends compared to stocks as they are required to pay the large portion of their income as dividends.</p>
    <p>Over time, rents escalate and the dividends paid by a trust will escalate as well.</p>

    <h5>Transparency</h5>
    <p>REITs provided audited financial reports that their investors can view, similar to ETFs and credit funds.</p>

  </div>
)


const ArticleWhatAreREITs = {
  title: "What are REITs",
  author: authors.cody,
  body: body,
  sources: [
    {
      title: "“What's a REIT (Real Estate Investment Trust)?” What Is a REIT (Real Estate Investment Trust)? | REIT.com",
      url: "https://www.reit.com/what-reit"
    },
    {
      title: "“Learn the Basics of REITS & Reit Investing.” REIT Basics | Learn the Basics of REITS & REIT Investing | Nareit",
      url: "https://www.reit.com/what-reit/reit-basics"
    },
  ]
}


export default ArticleWhatAreREITs;
