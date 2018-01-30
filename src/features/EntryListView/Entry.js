// @flow
import React from 'react';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import styles from './Entry.sass';
import EntryType from 'types/Entry.type';

type Props = {
  entryData: EntryType,
};

const entry = (props: Props) => (
  <ListItem
    leftAvatar={<Avatar src={'images/ok-128.jpg'} />}
    primaryText={
      <p>
        <span className={styles.Entry__description}>
          {props.entryData.description}
        </span>
        <span className={styles.Entry__value}>{props.entryData.value}</span>
      </p>
    }
    secondaryText={
      <p>
        {props.entryData.tags.length > 0
          ? props.entryData.tags.join(' ')
          : 'sem tags'}
      </p>
    }
    secondaryTextLines={2}
  />
);

export default entry;
