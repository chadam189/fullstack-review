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
        // console.log('THIS IS RESPONSE OF INITIAL GET REQ: ', data.length);
        // let temp = [];
        // temp.push({
        //   "_id" : "5a04d85966ca4942c6a35dc7",
        //   "repo_name" : "grocery-list-clean-hrsf83",
        //   "repo_id" : 108800972,
        //   "repo_description" : "React Grocery List App for Hack Reactor",
        //   "repo_url" : "https://api.github.com/repos/chadam189/grocery-list-clean-hrsf83",
        //   "repo_watchers" : 0,
        //   "owner_name" : "chadam189",
        //   "owner_id" : 30055253,
        //   "owner_pic" : "https://avatars1.githubusercontent.com/u/30055253?v=4",
        //   "__v" : 0
        // });
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
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));