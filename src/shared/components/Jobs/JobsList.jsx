import React, { Component } from 'react';
import JobsListItem from './JobsListItem';

class JobsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }

    }

    componentDidMount() {
        fetch('https://search.bossjob.com/api/v1/search/job_filter?size=12&query=system&page=1')
        .then(res => res.json())
        .then(data => this.setState({jobs: data.data.jobs}));
    }

  render() {

     let jobItems;

     jobItems = this.state.jobs.map(job => (
         <JobsListItem key={job.id} job={job} />
     ));


    return (
      <div>
        {jobItems}
      </div>
    );
  }
}

export default JobsList;
