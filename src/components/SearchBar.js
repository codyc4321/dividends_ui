import React from 'react';


class SearchBar extends React.Component {
  state = {
    term: 'psec',
    debouncedTerm: 'psec'
  }

  componentDidUpdate(previousProps, previousState) {
    // this.props.onSubmit(this.state.term);
    console.log("new state:");
    console.log(this.state);
    console.log("previous state:");
    console.log(previousState);

    console.log("props:");
    console.log(this.props);
    console.log("previous props");
    console.log(previousProps);

    // this.props.onSubmit(this.state.term);

    // const timerId = setTimeout(() => {
    //   this.setState({debouncedTerm: thi})
    // })

    if (this.state.debouncedTerm !== previousState.debouncedTerm) {
      this.props.onSubmit(this.state.term);
    }
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
