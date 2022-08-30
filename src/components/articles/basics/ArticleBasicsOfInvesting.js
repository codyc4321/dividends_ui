import authors from '../authors';


const body = (
  <div>
    <p>Investing has many asset classes and options, but in the most basic sense there are 4 main investments to pick from:</p>
    <ul>
      <li>Cash</li>
      <li>Bonds</li>
      <li>Preffered Stock</li>
      <li>Common Stock</li>
    </ul>

    <h4>Cash</h4>
    <p>Cash investments are either actual cash, or cash equivalents that can be turned into cash quickly. Examples are bank savings, money market accounds, and&nbsp;
    certificates of deposit.</p>
    <p>Cash is the least risky asset class (many people don't consider cash to be an investment). The maximum interest earned on cash rarely beats inflation&nbsp;
    (about 2%) and while being the safest, holding cash has the least reward. Everybody needs some amount of cash to pay bills or pay for emergencies.
    Most financial advisors recommend holding enough cash to pay bills for 6-12 months and having a special fund for emergencies.</p>


    <h4>Bonds</h4>
    <p>Bonds are the safest form of investment. Bonds are money loaned out to governments or corporations that earn interest payments in return for&nbsp;
    the privilege of borrowing the money. The safest bonds are treasury bills (money loaned to the Federal government), then municipal bonds
    (loans to counties, cities, nonprofits), then corporate bonds. As the safest form of investment, bonds have the lowest total rate of return.
    This is because bonds are the first liability a company must pay, and bonds are first to be repaid in the event of bankruptcy.
    Recently bonds have been earning roughly 3-5%.</p>

    <h4>Preferred Stock</h4>
    <p>Prefered stock sits in no-man's-land somewhere between a bond and a stock. It is usually redeemable for cash in increments of $25 but it pays an
    interest payment like a bond. This type of stock is next in line to be paid interest or repaid during a bankruptcy after bonds.
    Preferred stock is less liquid (able to be sold quickly) than stocks or bonds because it is less popular. Recently preferred stocks have been earning approximately 5-7%.
    Finance firm Janney Montgomery Scott recommends only putting&nbsp;
    <a href="https://www.simplysafedividends.com/world-of-dividends/posts/2094-a-guide-to-investing-in-preferred-stocks" target="_blank">
      10% of the money you put into bonds into preferred stock.
    </a></p>

    <h4>Common Stock</h4>
    <p>Common stock (usually just referred to as stock since it is much more common than preferred stock) is the most risky yet most rewarding asset class.
    While bonds and preferred stocks can appreciate in value (cash depreciates) common stock has unlimited upside and can allow massive returns
    as small companies can grow very large. One of the most popular stock funds, VTI, has returned 10% on average over the last 30 years.
    In fact, according to <a href="https://www.nerdwallet.com/article/investing/average-stock-market-return" target="_blank">Nerd Wallet</a>, the
    average return of the stock market is 10%. However, the S&P 500 has returned a &nbsp;
    <a href="https://www.businessinsider.com/personal-finance/average-stock-market-return" target="_blank">massive 14.7%</a> over the last 10 years.&nbsp;
    Another big advantage of common stock is that it confers voting rights to its owners on a per-share basis. Common stock is riskier because any dividends
    offered are last in line to be paid after bonds and preferred stock, and in a bankruptcy common stockholders are also last to be paid after bonds and preferreds.</p>

    <h4>How to Invest</h4>
    The most common way to start investing is to open an online brokerage account at a national brokerage like&nbsp;
    <a href="https://www.schwab.com/open-an-account" target="_blank">Charles Schwab</a>,&nbsp;
    <a href="https://www.fidelity.com/go/starter-pack" target="_blank">Fidelity</a>, or&nbsp;
    <a href="https://www.tdameritrade.com/tools-and-platforms/trader-offering.html" target="_blank">TD Ameritrade</a>.&nbsp;
    I recommend Charles Schwab because the customer service is amazing, even if you don't have much money in your account. 


    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
)

const ArticleBasicsOfInvesting = {
  title: "Basics of Investing",
  author: authors.cody,
  body: body,
  sources: [
    {
      title: "Chen, James. “Investing for Beginners: A Guide to Assets.” Investopedia, Investopedia, 8 July 2022",
      url: "https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp."
    },
    {
      title: "“ETF.” Lazy Portfolio ETF",
      url: "http://www.lazyportfolioetf.com/etf/vanguard-total-stock-market-vti/."
    },
    {
      title: "James F. Royal. “What Is the Average Stock Market Return?” NerdWallet",
      url: "https://www.nerdwallet.com/article/investing/average-stock-market-return."
    },
    {
      title: "Liz Knueven, Rickie Houston. “The Average Stock Market Return over the Past 10 Years.” Business Insider, Business Insider, 26 May 2022",
      url: "https://www.businessinsider.com/personal-finance/average-stock-market-return"
    },
    {
      title: "“A Guide to Investing in Preferred Stocks.” World of Dividends by Simply Safe Dividends, 16 Aug. 2022",
      url: "https://www.simplysafedividends.com/world-of-dividends/posts/2094-a-guide-to-investing-in-preferred-stocks"
    },
  ]
}


export default ArticleBasicsOfInvesting;
