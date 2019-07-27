import { GET_JOB_LIST, GET_JOB_FAILED } from './types';
import axios from 'axios';
const apiUrl = 'https://search.bossjob.com/api/v1/search/job_filter';

export const fetchJobs = () => {
    return async (dispatch) => {
        try {
            const results = await axios.get(`${apiUrl}?size=12&&page=1`);
            dispatch({
                type: GET_JOB_LIST,
                payload: results.data
            });
        } catch (error) {
            dispatch({
                type: GET_JOB_FAILED
            });
        }
    }

}

export const getJobs = (query) => {
    return async (dispatch) => {
        try {
            const results = await axios.get(`${apiUrl}?size=12&query=${query}&page=1`);
            dispatch({
                type: GET_JOB_LIST,
                payload: results.data
            });
        } catch (error) {
            dispatch({
                type: GET_JOB_FAILED
            });
        }

    }


}
