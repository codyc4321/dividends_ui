import MyLink from '../../shared/MyLink';
import TickerLink from '../../shared/TickerLink';

import authors from '../authors';


const body = (
  <div>
    <p>Dividend kings and aristocrats are companies that not only consistently pay a dividend, but also consistently <i>raise</i> their dividend.</p>
    <p>The only requirement for a company to be a dividend king is to have raised their dividend every single year for 50 years in a row.</p>
    <p>The criteria to be a dividend aristocrat is more specific. First, the company must have raised their dividend every year for 25 years in a row.&nbsp;
    Also, the company must meet 3 specific attributes to be an aristocrat:</p>
    <ol>
      <li>Must be a member of the S&P 500</li>
      <li>Must maintain liquidity of a daily stock trade value of $5 million for at least 3 months before entering the list</li>
      <li>Must maintain a total market cap of $3 billion</li>
    </ol>
    <p>Some well-known dividend aristocrats are Aflac (<TickerLink ticker="AFL" />), <TickerLink ticker="IBM" />, Walgreens (<TickerLink ticker="WBA" />),
    Chlorox (<TickerLink ticker="CLX" />), McDonald's (<TickerLink ticker="MCD" />), Pepsi (<TickerLink ticker="PEP" />), and Walmart (<TickerLink ticker="WMT" />).</p>
    <p>Examples of well-known dividend kings include Coca-Cola (<TickerLink ticker="KO" />), Johnson & Johnson (<TickerLink ticker="JNJ" />),
    3M (<TickerLink ticker="MMM" />, they make most of the tape you use), and Target superstore (<TickerLink ticker="TGT" />).</p>
    <p>Although the extra criteria for aristocrats is more specific, some dividend kings are also aristocrats.</p>
    <p>Because 50 years of raised dividends is much longer than 25 years, there are usually less kings than aristocrats.
    Most recently, there are 65 aristocrats and 45 kings.</p>
    <p>Keep in mind, that a consistently raising dividend does not guarentee a high dividend yield.
    However, a stock with a raising dividend held long-term over 20-30 years may start out as a 2%
    dividend on the day you bought the stock, but decades later could become 10% or higher on your
    initial investment.</p>
    <p>Consider a stock you buy today for $100, with a 2% dividend. If the yearly
    dividend rate increases to $10 per year 20 years from now, you will be earning 10% on your initial investment, plus
    all the capital gains the stock experienced.  While a raising dividend doesn't guarentee capital gains, as
    dividends rise, the stock price will oftentimes rise with it. As an example, check out <MyLink path="/search/hd" text="Home Depot" />.
    Set the dividend history to 20 years, and see how much Home Depot's dividend and stock price has increased long-term.</p>
    <h4>Pros and Cons of buying aristocrats</h4>
    <p>Buying dividend aristocrats may not be an ideal strategy for every investor's goals. Some dividend aristocrats' total returns have recently
    underperformed the S&P 500.</p>
    <h5>Pros:</h5>
    <ul>
      <li>Increasing dividends provide stable income for people relying on passive income (disabled, retired, etc)</li>
      <li>long-term rising dividends signal strong financial strength of a company, and proves more safety as an investment</li>
      <li>Over a long time span, the dividend yield you will earn on your investment increases</li>
      <li>Dividend aristocrats and kings tend to be resilient in recessions, declining in value less than newer and less stable companies</li>
    </ul>
    <h5>Cons:</h5>
    <ul>
      <li>Dividends paid out leave less money for reinvestment and company growth</li>
      <li>Due to above, high dividend paying stocks usually produce less capital gains than growth stocks</li>
      <li>Dividends are taxable as income, and can cause hardship to your yearly tax bill</li>
    </ul>
    <p>Mature, profitable companies like the dividend kings and aristocrats have less swings in stock price due their stability and consistent quarterly earnings.
    For retirees especially, the lower volatility and safe income of these stocks can be a large advantage in their portfolio.
    When you no longer work for income, large swings in your portfolio value can cause losses if you need to sell stocks to raise cash in the short term.</p>
    <h4>Dividend aristocrats vs. the market?</h4>
    <p>While this answer depends on timing, as of 2021 and over the last decade, the aristocrats as a whole have
    returned 14.3% compared to 14.2% for the entire S&P 500. Adjusted for risk, however, the lower volatility of the aristocrats is an advantage.</p>
    <h4>What's the best way to invest in dividend aristocrats?</h4>
    <p><TickerLink ticker="SPYD" /> and <TickerLink ticker="NOBL" /> are two popular ETFs with high dividend yields that sample the dividend aristocrats.
    As of 2022 there is no ETF dedicated entirely to the dividend kings.</p>
  </div>
)


const ArticleDividendKings = {
  title: "Dividend Kings and Aristocrats",
  author: authors.cody,
  body: body,
  sources: [
    {
      title: "Hayes, Adam. “Dividend Aristocrat.” Investopedia, Investopedia, 11 July 2022",
      url: "https://www.investopedia.com/terms/d/dividend-aristocrat.asp"
    },
    {
      title: "S&amp;P 500 Dividend Aristocrats.” Corporate Finance Institute",
      url: "https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/sp-500-dividend-aristocrats/."
    }
  ]
}


export default ArticleDividendKings;
