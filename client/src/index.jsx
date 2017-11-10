import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      top25: []
    }

    this.updateRepos = this.updateRepos.bind(this);

  }

  componentDidMount() {

    var context = this;

    $.ajax({
      url: '/repos',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        context.updateRepos(data);
      },
      error: function (err) {
        console.log('Get request failed: ', err);
      }
    });

  }

  updateRepos (data) {    
    this.setState({
      repos: data
    });
  }

  search (term) {

    var context = this;

    $.ajax({
      url: '/repos',
      type: 'POST',
      data: JSON.stringify({user: term}),
      contentType: 'application/json',
      success: function (data) {
        context.updateRepos(data);
      },
      error: function (err) {
        console.log('Post request failed: ', err);
      }
    });

  }

  render () {
    return (<div>
      <h1>Github Fetcher<img className="titleimg" src="http://opnsrce.github.io/wp-content/uploads/2011/10/github-logo.png"/></h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));