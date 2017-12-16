import React from 'react';

import styles from './EntryList.sass';
import Entry from './Entry';

const entryList = props => (
    <ul className={styles.EntryList}>
        {props.entries.map(entryData => <Entry entryData={entryData} />)}
    </ul>
);

export default entryList;
