import * as actions from './activeUser.actions';

import { lucas } from './fakeCircle';

const activeUser = (activeUser = lucas, action) => {
    switch (action.type) {
        case actions.SET_ACTIVE_USER:
            return {
                activeUser: action.user
            };

        default:
            return activeUser;
    }
};

export default activeUser;
