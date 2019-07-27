import { GET_JOB_LIST, GET_JOB_SUCCESS, GET_JOB_FAILED } from '../actions/types';

const initialState = {
    items: [],
    jobCount: '',
}

export default function(state = initialState, action) {

    switch(action.type) {

        case GET_JOB_LIST:

             return {
                 ...state,
                 items: action.payload.jobs,
                 jobCount: action.payload.total_num
             }


        default:
            return state;

    }


}
