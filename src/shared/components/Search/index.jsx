import React, { Component } from 'react';
import { getJobs } from '../../../actions/jobActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Search extends Component {

    handleSearch = (e) => {
        // console.log(e.target.value);
        this.props.doGetJobs(e.target.value);
    }

  render() {

      const { jobs: { query } } = this.props;

    return (
        <div>
          <div className="inputgroup">
              <span><i className="fa fa-search" aria-hidden="true"></i></span>
              <input type="text" placeholder="Search for job title or company name" value={query} onChange={this.handleSearch} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    jobs: state.job.items,
    jobsCount: state.job.jobsCount
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    doGetJobs: getJobs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
