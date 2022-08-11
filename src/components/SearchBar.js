import React, {useState, useEffect} from 'react';


const SearchBar = ({onTermUpdate, term}) => {
  // const defaultStock = 'wba';
  //
  // const [term, setTerm] = useState(defaultStock);
  // const [debouncedTerm, setDebouncedTerm] = useState(defaultStock)
  //
  const onFormSubmit = (event) => {
    event.preventDefault();
  }
  //
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedTerm(term);
  //   }, 800);
  //
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  //
  // }, [term]);
  //
  // useEffect(() => {runSearch(term)}, [debouncedTerm]);


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
