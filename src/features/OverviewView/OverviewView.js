// @flow
import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';

import CircleType from 'types/Circle.type';

import OverviewBar from './OverviewBar';
import WhoSpentWhat from './WhoSpentWhat';
import WhoOwnsWhatToWhom from './WhoOwnsWhatToWhom';

type Props = {
  circle: CircleType,
};

class OverviewView extends Component<Props> {
  state: any = {
    isDrawerOpen: false,
  };

  handleToggleDrawer = () =>
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

  render() {
    return (
      <div>
        <OverviewBar
          circle={this.props.circle}
          onClick={this.handleToggleDrawer}
        />
        <Drawer
          width={200}
          anchor="right"
          open={this.state.isDrawerOpen}
          onClose={this.handleToggleDrawer}
        >
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
