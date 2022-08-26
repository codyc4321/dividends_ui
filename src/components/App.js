import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import Header from './Header';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<SearchPage/>} />
            <Route path="/home" exact element={<HomePage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
