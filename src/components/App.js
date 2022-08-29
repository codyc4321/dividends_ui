import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import Header from './Header';
import Articles from './Articles';
import ArticleDividendKings from './articles/ArticleDividendKings';
import ArticleDividendsVsGrowth from './articles/ArticleDividendsVsGrowth';
import ArticleTaxes from './articles/ArticleTaxes';

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
            <Route path="/articles/dividend-aristocrats" exact element={<ArticleDividendKings/>} />
            <Route path="/articles/dividends-vs-growth" exact element={<ArticleDividendsVsGrowth/>} />
            <Route path="/articles/taxes" exact element={<ArticleTaxes/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
