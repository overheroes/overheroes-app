import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// process STARTUP actions
export function * watchStartup () {
  while (true) {
    yield take(Types.STARTUP)
    yield put(Actions.requestHeroes())
    // const temp = yield select((state) => state.weather.temperature)
    // only fetch new temps when we don't have one yet
    // if (!R.is(Number, temp)) {
    //   yield put(Actions.requestTemperature('San Francisco'))
    // }
  }
}
