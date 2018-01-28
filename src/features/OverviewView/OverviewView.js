// @flow
import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';

import CircleType from 'types/Circle.type';

import WhoSpentWhat from './WhoSpentWhat';
import WhoOwnsWhatToWhom from './WhoOwnsWhatToWhom';

type Props = {
  circle: CircleType,
};

class OverviewView extends Component<Props> {
  state = {
    isDrawerOpen: false,
  };

  handleToggleDrawer = () =>
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

  render() {
    return (
      <div>
        <div onClick={this.handleToggleDrawer}>BARRINHA BONITA</div>
        <Drawer width={200} openSecondary={true} open={this.state.isDrawerOpen}>
          <div onClick={this.handleToggleDrawer}>
            <WhoSpentWhat users={this.props.circle.users} />
            <WhoOwnsWhatToWhom circle={this.props.circle} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default OverviewView;
