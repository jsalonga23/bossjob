import React, { Component } from 'react';
import JobsListItem from './JobsListItem';
import Search from '../Search';

import { fetchJobs } from '../../../actions/jobActions';
import { connect } from 'react-redux';


class JobsList extends Component {

    componentDidMount() {
        this.props.fetchJobs();
    }

  render() {

     let jobItems;

     jobItems = this.props.jobs.map(job => (
         <JobsListItem key={job.id} job={job} />
     ));


    return (
      <div>
        <Search />
        {jobItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    jobs: state.job.items,
    jobsCount: state.job.jobsCount
});

export default connect(mapStateToProps, { fetchJobs })(JobsList);
