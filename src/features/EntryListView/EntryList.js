// @flow
import React from 'react';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import styles from './EntryList.sass';
import Entry from './Entry';
import EntryType from 'types/Entry.type';

type Props = {
  entries: EntryType[],
};

const sortByTimestamp = (a: EntryType, b: EntryType): number =>
  new Date(a.isoTimestamp).getTime() - new Date(b.isoTimestamp).getTime();

const entryList = (props: Props) => (
  <List className={styles.EntryList}>
    <Subheader>Today</Subheader>
    {props.entries
      .sort(sortByTimestamp)
      .map((entry, index) => (
        <Entry key={`entry-${index}`} entryData={entry} />
      ))}
  </List>
);

export default entryList;
