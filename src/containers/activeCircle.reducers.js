import * as actions from './activeCircle.actions';

import CircleType from 'types/Circle.type';

const activeCircle = (activeCircle = {}, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_CIRCLE:
      return new CircleType(action.circle);

    case actions.ADD_USER:
      return new CircleType({
        ...activeCircle,
        users: [...activeCircle.users, action.user],
      });

    case actions.ADD_ENTRY:
      return new CircleType({
        ...activeCircle,
        entries: [...activeCircle.entries, action.entry],
      });

    default:
      return activeCircle;
  }
};

export default activeCircle;
