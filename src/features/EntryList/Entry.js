// @flow
import React from 'react';

import styles from './Entry.sass';

import type { EntryType } from './Entry.type';

type Props = {
    entryData: EntryType
};

const entry = (props: Props) => (
    <li className={styles.Entry}>
        <div className={styles.Entry__icon}>icon</div>
        <div className={styles.Entry__primaryInfo}>
            <h4 className={styles.Entry__description}>
                {props.entryData.description}
            </h4>
            <div className={styles.Entry__tags}>
                {props.entryData.tags.join(' ')}
            </div>
        </div>
        <div className={styles.Entry__value}>{`${
            props.entryData.currencySymbol
        } ${props.entryData.value}`}</div>
    </li>
);

export default entry;
