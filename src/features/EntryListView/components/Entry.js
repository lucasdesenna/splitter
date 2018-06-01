// @flow
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import sass from './Entry.sass';
import EntryType from 'types/Entry.type';

type Props = {
  entry: EntryType,
  user: any,
};

const entry = (props: Props) => {
  const { entry, user } = props;

  return (
    <ListItem classes={{ root: sass.Entry }}>
      <ListItemAvatar>
        <Avatar src={user.avatarUrl} alt={user.name} />
      </ListItemAvatar>
      <ListItemText
        primary={entry.description}
        secondary={entry.tags.length > 0 ? entry.tags.join(' ') : 'sem tags'}
      />
      <div className={sass.entryValue}>{entry.value}</div>
    </ListItem>
  );
};

export default entry;
