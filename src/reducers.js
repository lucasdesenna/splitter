import { combineReducers } from 'redux';
import activeCircle from 'containers/activeCircle.reducers';

const appReducers = combineReducers({
  activeCircle,
});

export default appReducers;
