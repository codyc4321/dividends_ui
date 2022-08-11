import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './SearchPage';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<SearchPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
