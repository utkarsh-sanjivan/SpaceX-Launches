import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
    GET_LAUNCH_LIST_REQUESTED,
    GET_LAUNCH_LIST_SUCCESS,
    GET_LAUNCH_LIST_ERRORED,
} from './constants';
import {
    getLaunchListAPI,
} from '../../api/api.launch';

function* getLaunchListSaga(action) {
    try {
        const responseBody = yield call(getLaunchListAPI, action.payload);
        yield put({
            type: GET_LAUNCH_LIST_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_LAUNCH_LIST_ERRORED,
            payload,
        });
    };
};

export default function* userSaga() {
    yield all([
        takeLatest(GET_LAUNCH_LIST_REQUESTED, getLaunchListSaga),
    ]);
};