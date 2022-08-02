import React, {useState, useEffect} from 'react';


const SearchBar = ({onSubmit}) => {
  const defaultStock = 'psec';

  const [term, setTerm] = useState(defaultStock);
  const [debouncedTerm, setDebouncedTerm] = useState(defaultStock)

  const onFormSubmit = (event) => {
    event.preventDefault();
    // onSubmit(term);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };

  }, [term]);

  useEffect(() => {
    onSubmit(term);
  }, [debouncedTerm]);

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Stock search</label>
          <input
           type="text"
           value={term}
           onChange={(e) => {
             console.log("debounced term: ", debouncedTerm);
             setTerm(e.target.value)
            }
           }
           ref={ref => ref && ref.focus()}
           onfocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
           />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;
