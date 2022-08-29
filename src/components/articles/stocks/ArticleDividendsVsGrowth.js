import {Link} from 'react-router-dom';


const body = (
  <div>
    <h3>Dividend vs. Growth stocks</h3>
    <p>One important distinction every new investor should understand is the advantages of either dividend or growth stocks.</p>
    <p>First we must understand what makes a dividend or growth stock. Companies go through 3 stages in their lifecycle: startup, growing, and finally, mature.</p>
    <p>In the startup phase, the company is not turning a profit, and it relies on outside funding, like selling equity to investors or taking out loans. Each month
    the company is losing money from operations but the founders are working hard to make it profitable. In this phase it is purely a growth stock but it is the most risky time
    to invest in a company.</p>
    <p>In the growing phase, the company is now profitable and is funding its own operations and possibly paying down debt. It does not pay a dividend yet,
    as leadership is reinvesting most of the profits into expanding and growing the company. The company is now likely stable, depending on how much debt it has,
    and is less risky an investment than a startup company.</p>
    <p>In the mature phase, after a startup becomes a profitable and growing company, many years later, it will absord all of the market share that its goods or
    services provided will allow. While it's possible the company can still grow, many mature companies either no longer grow or grow very slowly. This is because
    their marketing has already reached most of the people or companies that would be willing to use their services. The company has acquired the customers it can acquire,
    and at this point its best growth opportunities are mergers and acquisitions, spinning off child companies in different industries, going for a full vertical integration
    of its own supply chain, or developing an international presence if it didn't have one.</p>
    <p>Because mature companies are finding it difficult to keep growing, and they should do something with their profits, many decide to pay dividends to reward
    investors for their support and to make the company's stock more valuable. These large, mature, and profitable companies that pay dividends are the least risky
    stocks to invest in. The total returns you will earn may be lower than with growth stocks, but if safety is your main goal, mature companies may be for you.
    Remember, with less risk, there is usually less potential for large gains.</p>
    <h4>Which type of stock is best for me?</h4>
    <p>If you are decades away from being able to retire, growth stocks are your best bet, They offer much higher total return potential than the safer dividend companies.
    While you can also invest in some dividend stocks to balance your portfolio, choosing mostly growth stocks will net you the highest total return and the most comfortable
    retirement.</p>
    <p>Investing in growth stocks requires good discipline and emotional control. Take Tesla, which has increased in value 1500% since 2016. This year, it is down a&nbsp;
    whopping 45%. Investors will still be seeing a profit, but the large downswings of newer companies and growth stocks can cause some investors to panic sell. &nbsp;
    As is usually the case, taking a longterm approach with growth stocks is best.</p>
    <p>For investors nearing retirement or in retirement, preserving their net worth is more important than quickly growing it. Losing a large portion of their
    portfolio's value would be catastrophic as they do not have the income from work to replace it. Also, they may need to sell stocks to pay bills since
    they are either working less or not working. The high volatility in growth stocks is not ideal for them, they prefer stable companies that won't see large declines in
    stock value. Also, they rely on the dividends paid to live off of.</p>
    <h4>Tax implications</h4>
    <p>Ordinary dividends are taxed as regular income on your yearly tax return. Qualified dividends are taxed a capital gains, Because most dividends are taxed as regular income,
    investors with a high income and high tax brackets will pay more in taxes from ordinary dividends. However, qualified dividends that are treated like capital gains
    are not taxed at all for investors who make less than $80,000 per year. Please see the &nbsp;
    <Link to="/articles/taxes" className="item">Taxes for dividends and capital gains</Link> article for specifics on how dividends and gains are taxed.</p>
  </div>
)


const ArticleDividendsVsGrowth = {
  body: body,
  sources: [
    {
      title: "Blank, Mark. “Better Buy: Dividend Stocks or Growth Stocks?” The Motley Fool, The Motley Fool",
      url: "https://www.fool.com/investing/2022/06/22/better-buy-dividend-stocks-or-growth-stocks/"
    },
    {
      title: "Maverick, J.B. “Is Dividend Income Taxable?” Investopedia, Investopedia, 13 July 2022",
      url: "https://www.investopedia.com/ask/answers/090415/dividend-income-taxable.asp."
    }
  ]
}


export default ArticleDividendsVsGrowth;
