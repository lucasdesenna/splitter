// @flow

export type EntryDataType = {
    currency: ?string,
    description: string,
    isoTimestamp: ?string,
    tags: ?(string[]),
    userId: string,
    value: number
};

class EntryType {
    currency: string;
    description: string;
    isoTimestamp: string;
    tags: string[];
    userId: string;
    value: number;

    constructor(entryDataType: EntryDataType) {
        this.currency = entryDataType.currency || 'BRL';
        this.tags = entryDataType.tags || [];
        this.isoTimestamp =
            entryDataType.isoTimestamp || new Date().toISOString();

        this.description = entryDataType.description;
        this.userId = entryDataType.userId;
        this.value = entryDataType.value;
    }
}

export default EntryType;
