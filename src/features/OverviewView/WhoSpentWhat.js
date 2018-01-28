// @flow
import React from 'react';

import UserType from 'types/User.type';

import styles from './WhoSpentWhat.sass';

type PropsType = {
  users: UserType[],
};

const whoSpentWhat = (props: PropsType) => (
  <ul className={styles.WhoSpentWhat}>
    {props.users.map((user, index) => {
      return (
        <li key={`whoSpentWhat-${index}`}>{`${user.name} spent a total of ${
          user.absoluteValue
        }`}</li>
      );
    })}
  </ul>
);

export default whoSpentWhat;
