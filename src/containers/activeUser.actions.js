// @flow
import UserType from 'types/User.type';
import type { UserDataType } from 'types/User.type';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const setActiveUser = (userData: UserDataType) => ({
    type: SET_ACTIVE_USER,
    user: new UserType(userData)
});
