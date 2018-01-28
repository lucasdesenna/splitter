import * as actions from './activeCircle.actions';

import fakeCircle from './fakeCircle';
import CircleType from 'types/Circle.type';
import EntryType from 'types/Entry.type';

const activeCircle = (activeCircle = fakeCircle, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_CIRCLE:
      return action.circle;

    case actions.ADD_USER:
      return new CircleType({
        ...activeCircle,
        users: [...activeCircle.users, action.user],
      });

    case actions.ADD_ENTRY:
      return new CircleType({
        ...activeCircle,
        entries: [...activeCircle.entries, new EntryType(action.entry)],
      });

    default:
      return activeCircle;
  }
};

export default activeCircle;
