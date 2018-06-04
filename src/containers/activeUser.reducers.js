import * as actions from './activeUser.actions';

import UserType from 'types/User.type';

const activeUser = (activeUser = {}, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_USER:
      return new UserType(action.user);

    case actions.CLEAR_ACTIVE_USER:
      return action.user;

    default:
      return activeUser;
  }
};

export default activeUser;
