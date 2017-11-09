import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    // console.log('something changed in the text box');
    // console.log('event = ', e.target.value);
    this.setState({
      term: e.target.value
    });
  }



  search() {
    this.props.onSearch(this.state.term);

    // console.log('i was clicked!!');
  }

  

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;