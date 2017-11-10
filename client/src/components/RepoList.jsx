import React from 'react';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.displayRepo = this.displayRepo.bind(this);
    this.displayAllRepos = this.displayAllRepos.bind(this);
  }

  displayRepo (repo) {
    return (
    	<li className='repo' key={repo.repo_id}>
        {repo.repo_name}
      </li>
    );
  }

  displayAllRepos (repos) {
    return repos.map(this.displayRepo);
  }

  render () {
	  return (
		  <div>
		    <h4> Repo List Component </h4>
		    There are {this.props.repos.length} repos.
		    <div> 
		      <ul className='repos'>
		        {this.displayAllRepos(this.props.repos)}
		      </ul>
		    </div>
		  </div>
	  );
  }

}

export default RepoList;