// @flow
import React from 'react';

import styles from './OverviewBar.sass';
import CircleType from 'types/Circle.type';
import UserType from 'types/User.type';

type Props = {
  circle: CircleType,
  onClick: ?Function,
};

const sortByAbsoluteValue = (a: UserType, b: UserType) =>
  a.absoluteValue - b.absoluteValue;

const valueBar = (user: UserType, circleAbsoluteValue: number) => (
  <div
    key={`${user.id}-value-bar`}
    className={styles.ValueBar}
    style={{
      backgroundColor: user.color,
      height: `${user.absoluteValue / circleAbsoluteValue * 100}vh`,
    }}
  />
);

const overviewBar = (props: Props) => {
  return (
    <div className={styles.OverviewBar} onClick={props.onClick}>
      {props.circle.users
        .sort(sortByAbsoluteValue)
        .map(user => valueBar(user, props.circle.absoluteValue))}
    </div>
  );
};

export default overviewBar;
