import React, { Component } from 'react';

class JobsListItem extends Component {
  render() {
    return (
        <div key={this.props.job.id}>
          <h3>{this.props.job.job_title}</h3>
        </div>
    );
  }
}

export default JobsListItem;
