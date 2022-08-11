import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import Header from './Header';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<SearchPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
