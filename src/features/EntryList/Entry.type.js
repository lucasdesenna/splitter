// @flow
import type { UserType } from 'User.type';

export type EntryType = {
    tags: string[],
    owner: UserType,
    value: number,
    currencySymbol: string,
    description: string
};
