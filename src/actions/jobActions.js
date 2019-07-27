import { GET_JOB_LIST, GET_JOB_SUCCESS, GET_JOB_FAILED } from './types';

const apiUrl = 'https://search.bossjob.com/api/v1/search/job_filter';

export const fetchJobs = () => dispatch => {

        fetch(`${apiUrl}?size=12&query=system&page=1`)
        .then(res => res.json())
        .then(jobs => dispatch({
            type: GET_JOB_LIST,
            payload: jobs.data
        }));

}

export const getJobs = (query) => dispatch => {

    if(query === '') {
        fetch(`${apiUrl}?size=12&query=system&page=1`)
        .then(res => res.json())
        .then(jobs => dispatch({
            type: GET_JOB_LIST,
            payload: jobs.data
        }));
    }else {
        fetch(`${apiUrl}?size=12&query=${query}`)
        .then(res => res.json())
        .then(jobs => dispatch({
            type: GET_JOB_LIST,
            payload: jobs.data
        }));
    }

}
