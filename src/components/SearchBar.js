import React, {useState, useEffect} from 'react';


const SearchBar = ({runSearch}) => {
  const defaultStock = 'wba';

  const [term, setTerm] = useState(defaultStock);
  const [debouncedTerm, setDebouncedTerm] = useState(defaultStock)

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);

    return () => {
      clearTimeout(timerId);
    };

  }, [term]);

  useEffect(() => {
    // if(term) {
      runSearch(term);
    // }
  }, [debouncedTerm]);

  console.log("the term is currently: ", term)
  console.log("the debounced term is currently: ", debouncedTerm)

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Stock search</label>
          <input
           type="text"
           value={term}
           onChange={(e) => setTerm(e.target.value)}
           ref={ref => ref && ref.focus()}
           onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
           />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;
