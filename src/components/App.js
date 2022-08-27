import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import Header from './Header';
import Articles from './Articles';
import ArticleOneDividendKings from './articles/ArticleOneDividendKings';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/search" exact element={<SearchPage/>} />
            <Route path="/articles" exact element={<Articles/>} />
            <Route path="/articles/1" exact element={<ArticleOneDividendKings/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
