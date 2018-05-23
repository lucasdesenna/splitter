// @flow
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import styles from './Entry.sass';
import EntryType from 'types/Entry.type';

type Props = {
  entryData: EntryType,
};

const entry = (props: Props) => (
  <ListItem>
    <Avatar src={'images/ok-128.jpg'} />
    <ListItemText
      primary={props.entryData.description}
      secondary={
        props.entryData.tags.length > 0
          ? props.entryData.tags.join(' ')
          : 'sem tags'
      }
    />
    <ListItemSecondaryAction>{props.entryData.value}</ListItemSecondaryAction>
  </ListItem>
);

export default entry;
