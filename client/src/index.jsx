import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    // $.post( '127.0.0.1:1128/', function( data ) {
    //   console.log('data');
    // });

    $.ajax({
      url: '/repos',
      type: 'POST',
      data: JSON.stringify({user: term}),
      contentType: 'application/json',
      success: function( data ) {
        console.log('data = ', data);
        console.log(typeof data);
      },
      error: function (err) {
        console.log('post req didnt work: ', err);
      }
    });

   // $.ajax({
   //  url: '127.0.0.1:1128/'
   //  type: 'POST',
   //  data: {
   //    'testParam' :'chadam189'
   //  },
   //  contentType: 'application/json',
   //  success: function (data) {
   //    console.log('data = ', data);
   //  }, 
   //  error: function (error) {
   //    console.error('POST request got an error: ', error);
   //  }

   //  }); 
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