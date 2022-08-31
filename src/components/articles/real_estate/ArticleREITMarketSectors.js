import authors from '../authors';

import MyLink from '../../shared/MyLink';
import TickerLink from '../../shared/TickerLink';

// https://www.reit.com/what-reit/reit-sectors

const body = (
  <div>
    <p>Real estate investment trusts own property in numerous market sectors. Let's look at most of the possible market sectors you can invest in.</p>
    <h4>Offices</h4>
    <p>Office trusts can be local to a city like <TickerLink ticker="SLG"/>, national like <TickerLink ticker="HIW"/>,
    or regional like <TickerLink ticker="CUZ"/>.&nbsp;
    Office REITs can focus on a single skyscraper, or a few office parks, and may cater to certain industries (like insurance offices only).</p>

    <h4>Industrial</h4>
    <p>Industrial trusts own properties like factories, warehouses, and shipping distribution centers. A popular industrial real estate stock is&nbsp;
    <TickerLink ticker="STAG"/>, which counts <MyLink path="/search/amzn" text="Amazon"/> as 4% of its portfolio, with e-commerce a large 40% in total.</p>
    <p>One aspect of industrial property that protects profits is that cosmetic repairs are not important in this sector.</p>

    <h4>Offices</h4>
    <p></p>
    <p></p>

    <h4>Offices</h4>
    <p></p>
    <p></p>

    <h4>Offices</h4>
    <p></p>
    <p></p>

    <h4>Offices</h4>
    <p></p>
    <p></p>
    <p></p>

    <h4>Offices</h4>
    <p></p>
    <p></p>
    <p></p>

    <h4>Offices</h4>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
)


const ArticleREITMarketSectors = {
  title: "REIT Market Sectors",
  author: authors.cody,
  body: body,
  sources: [
    {
      title: "“REIT Sectors.” Nareit",
      url: "https://www.reit.com/what-reit/reit-sectors"
    },
    {
      title: "Sizemore, Charles. “Stag Stock: Cash Monthly Dividend Checks with Amazon's Landlord.” Money &amp; Markets, LLC, 6 Apr. 2021",
      url: "https://moneyandmarkets.com/stag-stock-dividend-amazons-landlord/"
    },
  ]
}


export default ArticleREITMarketSectors;
