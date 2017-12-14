// @flow
import React from 'react';

import styles from './Entry.sass';

import { EntryType } from './Entry.type';

type Props = {
  entryData: EntryType
};

const entry = (props: Props) => (
  <li className={styles.entry}>
    <div>{`${props.entryData.currencySymbol} ${props.entryData.value}`}</div>
    <h1>{props.entryData.description}</h1>
  </li>
);

export default entry;
