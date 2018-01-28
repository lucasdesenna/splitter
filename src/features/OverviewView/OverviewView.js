// @flow
import React from 'react';
import { connect } from 'react-redux';

import CircleType from 'types/Circle.type';

import WhoSpentWhat from './WhoSpentWhat';
import WhoOwnsWhatToWhom from './WhoOwnsWhatToWhom';

const mapStateToProps = state => ({
  activeCircle: state.activeCircle,
});

type PropsType = {
  activeCircle: CircleType,
};

const OverviewView = (props: PropsType) =>
  props.activeCircle ? (
    <div>
      <WhoSpentWhat users={props.activeCircle.users} />
      <WhoOwnsWhatToWhom circle={props.activeCircle} />
    </div>
  ) : (
    ''
  );

export default connect(mapStateToProps)(OverviewView);
