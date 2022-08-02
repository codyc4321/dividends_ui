import React, {useState} from 'react';


const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('psec');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

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
           onfocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
           />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;
