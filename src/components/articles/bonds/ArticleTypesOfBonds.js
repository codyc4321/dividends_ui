import authors from '../authors';


const body = (
  <div>
    <p>There are many types of bonds, and at least 5 main types:</p>
    <ul>
      <li>Treasury Bonds</li>
      <li>Savings Bonds</li>
      <li>Agency Bonds</li>
      <li>Municipal Bonds</li>
      <li>Corporate Bonds</li>
    </ul>

    <h5>Treasury Bonds</h5>
    <p>The most well-known, most common, and most important type of bond is U.S. Treasury bonds. Treasury "bonds" actually come in&nbsp;
    <a href="https://www.finra.org/investors/learn-to-invest/types-investments/bonds/types-of-bonds/us-treasury-securities" target="_blank">
      3 varieties</a>&nbsp;
    with different time durations:
    <ul>
      <li>Bills (short-term, 1 year or less)</li>
      <li>Notes (medium-term, 2-10 years)</li>
      <li>Bonds (long-term, 30 years)</li>
    </ul>
    The current rate of interest on Treasury bonds helps determine the coupon rate on all other types of bonds.
    Treasury bonds are considered the lowest risk bond possible, as they are guarenteed by the full
    faith and credit of the U.S. government. If the lowest risk bond (treasuries) is currently paying 3%, then higher risk bonds must pay more than 3% to
    attract potential investors. As the safest investment, they also have the lowest return.</p>
    <p>Treasuries are sold at auctions to accredited investors and companies, which then resell them to other companies or individuals in the secondary market.
    Large funds that need safe investments, such as most insurance companies, carry a lot of treasury bonds. The minimum value of a treasury bond is $100.</p>

    <h5>Savings Bonds</h5>
    <p>Savings bonds are also issued and guarenteed by the U.S. Federal government. They can be bought directly from the U.S. Treasury, or from banks and credit unions.
    Unlike treasuries savings bonds cannot be resold, they must be held by their original owner. Savings bonds usually come in either series EE or series I forms.</p>
    <p>EE bonds return a fixed rate over their lfietime, compounded every 6 months.</p>
    <p>I bonds (I for inflation) pay a fixed rate determined at purchase, plus an inflation rate calculated twice per year, with interest compounded every 6 months.
    In June 2022, the fixed rate was 0% but the inflation rate was 9.62%.</p>
    <p>The minimum purchase for a savings bond is anything over $25.</p>

    <h5>Agency Bonds</h5>
    <p>Agency bonds are issued by Federal agencies besides the Treasury, or by government sponsored enterprises like the Federal National Mortgage Association.</p>
    <p>Agency bonds typical pay interest every 6 months, and Federal government agency bonds are safer than bonds from goverment sponsored companies.</p>
    <p>The minimum purchase for most agency bonds is $10,000.</p>
    <p></p>

    <h5>Municipal Bonds</h5>
    <p>Municipal bonds are issued by states, counties, cities, or local nonprofits, to raise money for public projects such as building parks, schools, or roads. </p>
    <p>Muncipal bonds are usually income tax-free, although they pay lower rates than corporate bonds. They are also usually state tax-free if the purchaser lives
    in the bond issuer's state. As they have tax advantages, they are popular with investors in a high tax bracket.</p>
    <p>A problem with munis is that they are less liquid (able to be resold) than treasuries and corporate bonds.</p>
    <p>Munis come in 2 main issues, &nbsp;
    <a href="https://www.schwab.com/learn/story/understanding-general-obligation-municipal-bonds" target="_blank">general obligation bonds</a>, &nbsp;
    which are paid from the general revunue of the municipality, such as property tax,
    and <a href="https://www.schwab.com/learn/story/understanding-municipal-revenue-bonds" target="_blank">revenue bonds</a>,
    which are paid for by a specific revenue source of the project, like a toll road or hospital revenue.</p>
    <p>Before Detroit went bankrupt, general obligation bonds were considered safer and payed a lower coupon rate.</p>
    <p>Most municipal bonds are sold in increments of $5,000.</p>

    <h5>Corporate Bonds</h5>
    <p>Corporate bonds are issued by many companies of different sizes. They are the riskiest type of bond and hence pay a larger coupon rate.
    They are usually sold to investors through various banks, and you can find them for sale in most online brokerages' websites.</p>
    <p>Corporate bonds are assigned a &nbsp;
    <a href="https://www.investopedia.com/terms/c/corporate-credit-rating.asp" target="_blank">credit rating</a>&nbsp;
    from varius agencies, such as from AAA to D. The bond issuer will usually pay a higher rate the lower their credit rating, as a lower rating should mean
    higher risk.</p>
    <p>Investors with an appetite of risk will invest in 'junk bonds', corporate bonds with a credit rating of BB+ or less. These
    high risk bonds oftentime pay coupon rates of 8-10%.</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
)


const ArticleTypesOfBonds = {
  title: "Types of Bonds",
  author: authors.cody,
  body: body,
  sources: [
    {
      title: "Amadeo, Kimberly. “Five Types of Bonds, the Durations, and Risk Levels.” The Balance, The Balance, 5 Oct. 2021",
      url: "https://www.thebalance.com/what-are-the-different-types-of-bonds-3305600"
    },
    {
      title: "“U.S. Treasury Securities.” U.S. Treasury Securities | FINRA.org",
      url: "https://www.finra.org/investors/learn-to-invest/types-investments/bonds/types-of-bonds/us-treasury-securities"
    },
    {
      title: "“U.S. Savings Bonds.” U.S. Savings Bonds | FINRA.org",
      url: "https://www.finra.org/investors/learn-to-invest/types-investments/bonds/types-of-bonds/us-savings-bonds"
    },
    {
      title: "“Research Center.” Individual - Comparing Series EE and Series I Savings Bonds",
      url: "https://www.treasurydirect.gov/indiv/research/indepth/ebonds/res_e_bonds_eecomparison.htm"
    },
    {
      title: "Chen, James. “What Is an Agency Bond?” Investopedia, Investopedia, 19 May 2021",
      url: "https://www.investopedia.com/terms/a/agencybonds.asp"
    },
    {
      title: "Chen, James. “Municipal Bond Definition.” Investopedia, Investopedia, 8 Feb. 2022",
      url: "https://www.investopedia.com/terms/m/municipalbond.asp"
    },
    {
      title: "Howard, Cooper. “Understanding Municipal Revenue Bonds.” Schwab Brokerage",
      url: "https://www.schwab.com/learn/story/understanding-municipal-revenue-bonds"
    },
    {
      title: "Howard, Cooper. “Understanding General Obligation Municipal Bonds.” Schwab Brokerage",
      url: "https://www.schwab.com/learn/story/understanding-general-obligation-municipal-bonds"
    },
    {
      title: "“Municipal Bonds.” Municipal Bonds | FINRA.org",
      url: "https://www.finra.org/investors/learn-to-invest/types-investments/bonds/types-of-bonds/municipal-bonds"
    },
    {
      title: "Murry, Cierra. “Everything You Need to Know about Junk Bonds.” Investopedia, Investopedia, 8 July 2022",
      url: "https://www.investopedia.com/articles/02/052202.asp"
    },
  ]
}


export default ArticleTypesOfBonds;
