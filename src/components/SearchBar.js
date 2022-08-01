import React from 'react';


class SearchBar extends React.Component {
  state = {term: 'psec'}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Stock search</label>
            <input
             type="text"
             value={this.state.term}
             onChange={(e) => this.setState({term: e.target.value})}
             ref={ref => ref && ref.focus()}
             onfocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
             />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;
