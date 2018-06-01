import * as actions from './activeUser.actions';

import UserType from 'types/User.type';
import { fakeUsersData } from 'repositories/fakeData';

const activeUser = (activeUser = new UserType(fakeUsersData[0]), action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_USER:
      return new UserType(action.user);

    default:
      return activeUser;
  }
};

export default activeUser;
