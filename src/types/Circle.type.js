// @flow
import type { UserDataType } from 'types/User.type';
import UserType from 'types/User.type';
import type { EntryDataType } from 'types/Entry.type';
import EntryType from 'types/Entry.type';

export type CircleDataType = {
    id: string,
    name: string,
    users: UserDataType[],
    entries: EntryDataType[]
};

class CircleType {
    id: string;
    name: string;
    entries: EntryType[];
    users: UserType[];
    absoluteValue: number = 0;

    constructor(circleData: CircleDataType) {
        this.id = circleData.id;
        this.name = circleData.name;
        this.entries = circleData.entries.map(
            (entryData: EntryDataType) => new EntryType(entryData)
        );
        this.users = circleData.users.map(
            (userData: UserDataType) => new UserType(userData)
        );

        this._updateAbsoluteValue();
        this._updateUsersAbsoluteValue();
        this._updateUsersRelativeValue();
    }

    _updateAbsoluteValue(): void {
        this.absoluteValue = this.entries.reduce(
            (absoluteValue, entry: EntryType) => absoluteValue + entry.value,
            0
        );
    }

    _updateUsersAbsoluteValue(): void {
        const entries: EntryType[] = [...this.entries];

        entries.map((entry: EntryType) => {
            for (const user of this.users) {
                if (user.id === entry.userId) {
                    user.absoluteValue += entry.value;
                    break;
                }
            }
        });

        this.entries = entries;
    }

    _updateUsersRelativeValue(): void {
        const users: UserType[] = [...this.users];

        this.users = users
            .map((user: UserType) => {
                user.relativeValue =
                    user.absoluteValue - this.absoluteValue / this.users.length;

                return user;
            })
            .sort((a, b) => a.relativeValue - b.relativeValue);
    }

    get creditors(): any[] {
        return this.users.filter(user => user.relativeValue > 0);
    }

    get debtors(): any[] {
        return this.users.filter(user => user.relativeValue < 0);
    }
}

export default CircleType;
