// @flow

export type EntryDataType = {
  id: string,
  currency: ?string,
  description: string,
  unixTimestamp: ?string,
  tags: ?(string[]),
  userId: string,
  value: number,
};

class EntryType {
  id: string;
  currency: string;
  description: string;
  unixTimestamp: string;
  tags: string[];
  userId: string;
  value: number;

  constructor(entryDataType: EntryDataType) {
    this.id = entryDataType.id;
    this.currency = entryDataType.currency || 'BRL';
    this.tags = entryDataType.tags || [];
    this.unixTimestamp =
      entryDataType.unixTimestamp || new Date().toISOString();

    this.description = entryDataType.description;
    this.userId = entryDataType.userId;
    this.value = entryDataType.value;
  }
}

export default EntryType;
