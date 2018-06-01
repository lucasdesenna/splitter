import React from 'react';

import sass from './OverviewBar.sass';

const valueBar = (user, index) => (
  <div
    key={`value-bar-${index}`}
    className={sass.ValueBar}
    style={{
      backgroundColor: user.color,
      height: `${user.proportionalValue * 100}vh`,
    }}
  />
);

const overviewBar = props => {
  return (
    <div className={sass.OverviewBar} onClick={props.onClick}>
      {props.usersWithValueData.map((user, index) => valueBar(user, index))}
    </div>
  );
};

export default overviewBar;
