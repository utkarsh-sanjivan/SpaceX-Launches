import { fork } from 'redux-saga/effects'
import launchList from './LaunchList/sagas';

export default function* root() {
  yield fork(launchList);
}