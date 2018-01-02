// @flow
import CircleType from 'types/Circle.type';
import type { CircleDataType } from 'types/Circle.type';
import UserType from 'types/User.type';
import type { UserDataType } from 'types/User.type';
import EntryType from 'types/Entry.type';
import type { EntryDataType } from 'types/Entry.type';

export const SET_ACTIVE_CIRCLE = 'SET_ACTIVE_CIRCLE';
export const setActiveCircle = (circleData: CircleDataType) => ({
    type: SET_ACTIVE_CIRCLE,
    circle: new CircleType(circleData)
});

export const ADD_USER = 'ADD_USER';
export const addUser = (userData: UserDataType) => ({
    type: ADD_USER,
    user: new UserType(userData)
});

export const ADD_ENTRY = 'ADD_ENTRY';
export const addEntry = (entryData: EntryDataType) => ({
    type: ADD_ENTRY,
    entry: new EntryType(entryData)
});
