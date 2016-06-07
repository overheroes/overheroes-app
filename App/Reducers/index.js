import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import WeatherReducer from './WeatherReducer'
import HeroesReducer from './HeroesReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  weather: WeatherReducer,
  heroes: HeroesReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
