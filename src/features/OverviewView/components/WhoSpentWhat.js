import React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import sass from './WhoSpentWhat.sass';

const whoSpentWhat = props => (
  <List
    className={sass.WhoSpentWhat}
    subheader={<ListSubheader>Saldo</ListSubheader>}
  >
    {props.usersWithValueData.map((user, index, list) => {
      return (
        <ListItem
          key={`whoSpentWhat-${index}`}
          divider={index === list.length - 1}
          classes={{ root: sass.item }}
        >
          <ListItemText
            classes={{ primary: sass.itemText }}
            primary={user.name}
          />
          <div className={sass.itemValue}>{user.value}</div>
        </ListItem>
      );
    })}
    <ListItem key={`whoSpentWhat-total`} classes={{ root: sass.item }}>
      <ListItemText classes={{ primary: sass.itemText }} primary="Total" />
      <div className={sass.itemValue}>{props.totalValue}</div>
    </ListItem>
  </List>
);

export default whoSpentWhat;
