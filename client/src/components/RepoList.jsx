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
        <div className='repotext'><strong>"{repo.repo_name}"</strong> by {repo.owner_name}</div>
        <img className = 'pics' src={repo.owner_pic} />
      </li>
    );
  }

  displayAllRepos (repos) {
    return repos.map(this.displayRepo);
  }

  render () {
	  return (
		  <div>
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