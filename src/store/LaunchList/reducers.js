import { 
    GET_LAUNCH_LIST_REQUESTED,
    GET_LAUNCH_LIST_SUCCESS,
    GET_LAUNCH_LIST_ERRORED,
} from './constants';

const INITIAL_STATE = {
    launchListLoading: false,
    launchListErrored: false,
    launchList: [],
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case GET_LAUNCH_LIST_REQUESTED:
            return {
                ...state,
                launchListLoading: true,
                launchListErrored: false,
                launchList: [],
            };

        case GET_LAUNCH_LIST_SUCCESS:
            return {
                ...state,
                launchListLoading: false,
                launchListErrored: false,
                launchList: action.payload,
            };

        case GET_LAUNCH_LIST_ERRORED:
            return {
                ...state,
                launchListLoading: false,
                launchListErrored: true,
                launchList: [],
            };

        default: {
            return {
                ...state
            }
        }

    };
};