import { 
    GET_LAUNCH_LIST_REQUESTED,
} from './constants';

export function getLaunchList(payload) {
    return {
        type: GET_LAUNCH_LIST_REQUESTED,
        payload,
    }
}
