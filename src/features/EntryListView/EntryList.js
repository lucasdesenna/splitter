import React from 'react';

import styles from './EntryList.sass';
import Entry from './Entry';
import EntryType from 'types/Entry.type';

type PropsType = {
  entries: EntryType[],
};

const sortByTimestamp = (a, b) =>
  new Date(a.isoTimestamp).getTime() > new Date(b.isoTimestamp).getTime();

const entryList = (props: PropsType) => (
  <ul className={styles.EntryList}>
    {props.entries
      .sort(sortByTimestamp)
      .map((entry, index) => (
        <Entry key={`entry-${index}`} entryData={entry} />
      ))}
  </ul>
);

export default entryList;
