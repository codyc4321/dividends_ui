import React, {useState, useEffect} from 'react';


const SearchBar = ({onTermUpdate, term}) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Stock search</label>
          <input
           type="text"
           value={term}
           onChange={(e) => onTermUpdate(e.target.value)}
           />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;
