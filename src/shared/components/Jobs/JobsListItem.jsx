import React, { Component } from 'react';

class JobsListItem extends Component {

    salaryFormat = (salary) =>{
        return Math.abs(salary) > 999 ? Math.sign(salary)*((Math.abs(salary)/1000).toFixed(1)) + 'k' : Math.sign(salary)*Math.abs(salary);
    };

    timeFormat = (jobTime) => {
        const dateToday = new Date();
        const dateJob = new Date(jobTime);
        const dateDiff = dateToday.getTime() - dateJob.getTime();
        var finalDate = dateDiff / (60 * 60 * 1000);

        if(finalDate >= 24) {
            var diffInDays = dateDiff / (1000 * 60 * 60 * 24);
            finalDate = Math.round(diffInDays) + "days ago";
        } else {
            finalDate = Math.round(finalDate) + "hours ago";

        }
        return finalDate;
    };

  render() {

    return (
        <div className="border-bottom margin-bottom-sm" key={this.props.job.id}>
            <div className="column-wrapper">
                <div className="column column-2">
                    <p className="jobTitle bold">{this.props.job.job_title}</p>
                </div>
                <div className="column column-2">
                    <p className="text-right"><span className="fromSalary">₱ {this.salaryFormat(this.props.job.salary_range_from)}</span> - <span className="fromSalary">{this.salaryFormat(this.props.job.salary_range_to)}</span></p>
                </div>
            </div>
            <div className="column-wrapper">
                <div className="column column-2">
                    <p className="jobWrapper sm-margin-bottom-top"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.job.job_location}</p>
                </div>
                <div className="column column-2">
                    <p className="jobWrapper sm-margin-bottom-top"><i className="fa fa-briefcase" aria-hidden="true"></i> {this.props.job.xp_lvl}</p>

                </div>
            </div>
            <div className="column-wrapper">
                <div className="column column-2">
                    <p className="jobWrapper sm-margin-bottom-top"><i className="fa fa-graduation-cap" aria-hidden="true"></i> {this.props.job.degree}</p>
                </div>
                <div className="column column-2">
                    <p className="jobWrapper sm-margin-bottom-top"><i className="fa fa-clock-o" aria-hidden="true"></i> {this.props.job.job_type}</p>

                </div>
            </div>
            <div className="column-wrapper">
                <div className="column column-2">
                    <p className="jobCompany">{this.props.job.company_name}</p>
                </div>
                <div className="column column-2">
                    <p className="text-right jobDate">{this.timeFormat(this.props.job.job_created_at)}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default JobsListItem;
