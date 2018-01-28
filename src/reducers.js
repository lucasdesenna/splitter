import { combineReducers } from 'redux';
import activeCircle from 'containers/activeCircle.reducers';
import activeUser from 'containers/activeUser.reducers';

const appReducers = combineReducers({
  activeCircle,
  activeUser,
});

export default appReducers;
