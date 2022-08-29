import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import Header from './Header';
import Article from './articles/Article';
import Articles from './Articles';
//intro
import ArticleWhyInvest from './articles/basics/ArticleWhyInvest';
import ArticleBasicsOfInvesting from './articles/basics/ArticleBasicsOfInvesting';
//stocks
import ArticleDividendKings from './articles/stocks/ArticleDividendKings';
import ArticleDividendsVsGrowth from './articles/stocks/ArticleDividendsVsGrowth';
import ArticleTaxes from './articles/stocks/ArticleTaxes';
//bonds
import ArticleTypesOfBonds from './articles/bonds/ArticleTypesOfBonds';


// https://stackoverflow.com/questions/47228311/how-to-match-arbitrary-text-after-a-route-with-react-router


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />

            <Route path="/search/" element={<SearchPage/>} />
            <Route path="/search/:searchTerm" element={<SearchPage/>} />

            <Route path="/articles" exact element={<Articles/>} />

            <Route path="/articles/why-invest" exact element={<Article data={ArticleWhyInvest} />} />
            <Route path="/articles/investing-basics" exact element={<Article data={ArticleBasicsOfInvesting} />} />

            <Route path="/articles/dividend-aristocrats" exact element={<Article data={ArticleDividendKings} />} />
            <Route path="/articles/dividends-vs-growth" exact element={<Article data={ArticleDividendsVsGrowth} />} />
            <Route path="/articles/taxes" exact element={<Article data={ArticleTaxes} />} />

            <Route path="/articles/types-of-bonds" exact element={<Article data={ArticleTypesOfBonds} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
