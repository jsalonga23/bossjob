import { GET_JOB_LIST, GET_JOB_FAILED } from '../actions/types';

const initialState = {
    items: [],
    jobsCount: '',
}

export default function(state = initialState, action) {

    switch(action.type) {
        case GET_JOB_LIST:
             return {
                 ...state,
                 items: action.payload.data.jobs,
                 jobsCount: action.payload.data.total_num
             }
         case GET_JOB_FAILED:
             return {
                 ...state,
                 items: [],
             }
        default:
            return state;

    }


}
