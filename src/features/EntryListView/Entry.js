// @flow
import React from 'react';

import styles from './Entry.sass';

import EntryType from 'types/Entry.type';

type Props = {
  entryData: EntryType,
};

const entry = (props: Props) => (
  <li className={styles.Entry}>
    <div className={styles.Entry__icon}>icon</div>
    <div className={styles.Entry__primaryInfo}>
      <h4 className={styles.Entry__description}>
        {props.entryData.description}
      </h4>
      <div>{props.entryData.isoTimestamp}</div>
      <div>{props.entryData.userId}</div>
      <div className={styles.Entry__tags}>
        {props.entryData.tags.length > 0
          ? props.entryData.tags.join(' ')
          : 'sem tags'}
      </div>
    </div>
    <div className={styles.Entry__value}>{props.entryData.value}</div>
  </li>
);

export default entry;
