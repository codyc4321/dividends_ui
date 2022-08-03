import React from 'react';


class SearchBar extends React.Component {

  debounceTimerId = undefined;

  state = {
    term: 'psec',
    debouncedTerm: 'psec',
  }

  clearDebounceTimer() {
    if (this.debounceTimerId) new Promise(function(resolve, reject) {
      clearTimeout(this.debounceTimerId);
      this.debounceTimerId = undefined;
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.state.term !== previousState.term) {
      this.clearDebounceTimer();

      this.debounceTimerId = setTimeout(() => {
        this.setState({debouncedTerm: this.state.term})
      }, 1200)
    }

    if (this.state.debouncedTerm !== previousState.debouncedTerm) {
      this.props.onSubmit(this.state.term);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

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
