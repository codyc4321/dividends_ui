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

    <h4>Retail</h4>
    <p>Retail REITs invest in properties such as shopping malls, outlets, or large retail spaces such as home improvement or electronics stores.
    Some retail REITs specialize in categories such as only restaurants, or only gas stations. A well-known retail trust with a high dividend is&nbsp;
    <TickerLink ticker="NNN"/>. Another example is <TickerLink ticker="ADC"/>.</p>
    <p></p>

    <h4>Lodging</h4>
    <p>Hotels and resorts are another type of REIT. Lodging REITs come in different classes of service, such as 3 star or 5 star hotels.&nbsp;
    Some examples of lodging trusts are <MyLink path="/search/aple" text="Apple Hospitality" />,&nbsp;
    <MyLink path="/search/bhr" text="Braemar Hotels & Resorts"/>, and <MyLink path="/search/cldt" text="Chatham Lodging Trust"/>.</p>


    <h4>Residential</h4>
    <p>Residential trusts may specialize in single-family homes, apartments, or manufactured homes. A popular apartment REIT is&nbsp;
    <MyLink path="/search/avb" text="Avalon Bay"/>. Some single-family trusts are&nbsp;
    <MyLink path="/search/invh" text="Invitation Homes"/>, <MyLink path="/search/amh" text="American Homes"/>,&nbsp;
    and <MyLink path="/search/tcn" text="Tricon Residential"/>. The last tradeable student housing trust was taken private in 2021.</p>
    <p></p>

    <h4>Timber</h4>
    <p>Some REITs only buy real estate related to growing trees. Wood prices are directly correlated with population growth and housing demand.
    Timber prices are cyclical, like other commodities, and if prices are low their profits may be down so much that the trust cuts its dividend.
    Timber REITs (or ETFs) are considered a good hedge against inflation.</p>
    <p>Timber REITs have natural risks that don't affect other investments, such as wildfires, infestations, and even floods.</p>
    <p>One of the largest timberland owners in the world is <MyLink path="/search/wy" text="Weyerhaeuser Company"/>, with a dividend near 8% last year
    and a market cap of over 29 billion dollars. Two other large timber REITs are <MyLink path="/search/ryn" text="Rayonier"/>&nbsp;
    and <MyLink path="/search/pch" text="PotlatchDeltic Corporation"/>.
    </p>

    <h4>Medical</h4>
    <p>Medical funds can own properties such as hospitals, senior living, skilled nursing facilities, and medical offices.
    One trust that owns numerous hospitals and is being talked about because it has a nearly 8% dividend is&nbsp;
    <MyLink path="/search/mpw" text="Medical Properties Trust"/>. Medical office buildings have seen the most rapid price appreciation
    recently, and <MyLink path="/search/doc" text="Physicians Realty Trust"/> is a large player in that space.
    A senior living and skilled nursing trust ready to
    cash in on our aging population is <MyLink path="/search/ohi" text="Omega Healthcare Investors"/>, with a dividend over 8%.
    A diversified full medical REIT that owns senior living, hospitals,
    and medical office buildings is <MyLink path="/search/nhi" text="National Health Investors"/>.</p>
    <p></p>
    <p></p>

    <h4>Self-storage</h4>
    <p>Self-storage facilities rent to both inviduals and businesses. The main benefits of self-storage facilities are the
    cheap maintenance, and peoples' desire to keep their belongings. Disadvantages are that in recessions people will part ways
    with their least valuable stuff, and stop paying for storage. The leases for storage are short-term, and since the facilities
    are cheap to build companies often overbuild. The 3 largest self-storage companies are&nbsp;
    <MyLink path="/search/psa" text="Public Storage"/>, <MyLink path="/search/exr" text="Extra Space Storage"/>,&nbsp;
    and <MyLink path="/search/cube" text="CubeSmart"/>. I own a few shares of <MyLink path="/search/cube" text="CubeSmart"/>&nbsp;
    and <MyLink path="/search/self" text="Global SELF Storage"/>, which is the smallest self-storage REIT.</p>
    <p></p>
    <p></p>

    <h4>Infrastructure</h4>
    <p>Infrastructure REITs cover areas like internet cables, wireless infrastructure, telecom towers, and even energy pipelines.
    Infrastructure benefits from relatively steady demand for its real estate. Most tenants sign long-term contracts,
    and it is unlike a telecom company would cut back on cell towers, or that an oil company would want to reduce pipeline coverage.</p>
    <p>Risks of owning this category of REIT include tenant bankruptcies. If demand for the tenant's product or service crashes
    the REIT may lose one of its largest customers.</p>
    <p>In addition, rising interest rates negatively affect most REITs. Many rely on borrowing to expand operations, and higher rates
    increase their interest expense on loans. Also, rising rates make safer investments like bonds more attractive, so stock prices of REITs
    tends to decline as rates rise. Two very large infrastructure REITs that focus on cell phone towers are&nbsp;
    <MyLink path="/search/amt" text="American Tower"/> and <MyLink path="/search/cci" text="Crown Castle International"/>.</p>

    <h4>Data Centers</h4>
    <p>Data center trusts manage computers that store information for companies and may offere special services such as cooling systems for
    the computers, security teams, and backup power supplies. The global leader in storage and information services is&nbsp;
    <MyLink path="/search/irm" text="Iron Mountain"/>, and they even handle secure paper document storage.</p>
    <p></p>
    <p></p>

    <h4>Specialty REITs</h4>
    <p>Specialty real estate companies include entertainment trusts (theaters, amusement parks, ski resorts) like&nbsp;
    <MyLink path="/search/epr" text="EPR Properties"/>, casino trusts like <MyLink path="/search/vici" text="VICI Properties"/>,&nbsp;
    one of the two farmland trusts like <MyLink path="/search/land" text="Gladstone Land"/> and&nbsp;
    <MyLink path="/search/fpi" text="Farmland Partners"/>, golf courses, prisons, and even billboard adverstising properties like&nbsp;
    big daddy <MyLink path="/search/lamr" text="Lamar Advertising"/> and smaller <MyLink path="/search/out" text="Outfront Media"/>.</p>
    <p>Billboard companies have plenty of room to grow revenue as they switch from canvas to digital billboards. Digital billboards change
    their ad every few seconds and generate a massive amount of profit compared to static boards. Lamar generates 25% of its revenue
    from digital boards which only make up 2% of its portfolio. Lamar owns 170,000 boards and is converting about 300 to digital each year.</p>
    <p>Farmland benefits from a very low correlation to stocks and bonds, it protects against inflation because farmers will just raise food prices,
    and it provides both rental income and capital appreciation for the trust that owns it. Due to this, farmland has returned a strong 11%
    total return from 1992 to 2021.</p>
    <p>The main risks for farmland investments include droughts, fires, infestations, natural disasters, fluctuating crop prices,
    and farmer bankruptcies. For this reason I wouldn't recommend any investment platform that asks for thousands of dollars to invest in one
    single farm. Any outsized returns aren't worth the risk, and national farmland funds are far more safe while returning a rate similar
    to most stocks.</p>

    <h4>Diversified REITs</h4>
    <p>While real estate trusts have heavily moved towards specialization in recent years, some diversify to a mix of property types.&nbsp;
    <MyLink path="/search/src" text="Spirit Realty Capital"/> is an example of one that owns retail, office, and industrial properties.</p>
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
    {
      title: "Waterworth, Kristi. “4 Timberland Reits to Consider in 2022.” The Motley Fool",
      url: "https://www.fool.com/investing/stock-market/market-sectors/real-estate-investing/reit/timberland-reit/"
    },
    {
      title: "Investor, High Yield. “Top 3 Healthcare REIT S for 2022.” SeekingAlpha, Seeking Alpha, 6 Feb. 2022",
      url: "https://seekingalpha.com/article/4483831-top-healthcare-reits-stocks-2022"
    },
    {
      title: "Vandenboss, Kevin. “Self-Storage Reits: 2022 Investment Guide • Benzinga.” Benzinga, Benzinga, 24 May 2022",
      url: "https://www.benzinga.com/money/self-storage-reits"
    },
    {
      title: "DiLallo, Matthew. “4 Infrastructure Reits to Consider in 2022.” The Motley Fool",
      url: "https://www.fool.com/investing/stock-market/market-sectors/real-estate-investing/reit/infrastructure-reit"
    },
    {
      title: "DiLallo, Matthew. “Investing in Farmland Reits.” The Motley Fool",
      url: "https://www.fool.com/investing/stock-market/market-sectors/real-estate-investing/reit/farmland-reits/"
    },
    {
      title: "Nguyen, Khai. “2 Billboard Reits That Should Capture Your Attention.” Contrarian Outlook",
      url: "https://contrarianoutlook.com/2-billboard-reits-that-should-capture-your-attention/. "
    },
  ]
}


export default ArticleREITMarketSectors;
