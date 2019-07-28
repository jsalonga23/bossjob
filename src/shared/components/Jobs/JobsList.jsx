import React, { Component } from 'react';
import JobsListItem from './JobsListItem';
import Search from '../Search';
import Filter from '../Filter';

import Pagination from '../Pagination';

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
        <div className="search-wrapper">
            <Search />
            <div className="filter-container">
                <Filter />
            </div>
        </div>
        <div className="wrapper-result">
            <p className="jobCount bold border-bottom">{this.props.jobsCount} jobs found</p>
            {jobItems}
            <div className="pagination-wrapper">
                <Pagination />
            </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    jobs: state.job.items,
    jobsCount: state.job.jobsCount
});

export default connect(mapStateToProps, { fetchJobs })(JobsList);
