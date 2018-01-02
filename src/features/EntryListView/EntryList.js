import React from 'react';

import styles from './EntryList.sass';
import Entry from './Entry';

import EntryType from 'types/Entry.type';

type PropsType = {
    entries: EntryType[]
};

const entryList = (props: PropsType) => (
    <ul className={styles.EntryList}>
        {props.entries.map((entry, index) => (
            <Entry key={`entry-${index}`} entryData={entry} />
        ))}
    </ul>
);

export default entryList;
