// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';

import { CircleType, UserType } from 'types';

import OverviewBar from './components/OverviewBar';
import WhoSpentWhat from './components/WhoSpentWhat';
import WhoOwnsWhatToWhom from './components/WhoOwnsWhatToWhom';

import sass from './OverviewView.sass';

const mapStateToProps = state => ({
  circle: state.activeCircle.circle,
  users: Object.values(state.activeCircle.users),
});

type Props = {
  circle: CircleType,
  users: UserType[],
};

class OverviewView extends Component<Props> {
  state: any = {
    isDrawerOpen: false,
  };

  handleToggleDrawer = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  getUsersWithValueData = () => {
    const { circle, users } = this.props;

    const circleMeanValue = circle.totalValue / users.length;

    return users
      .map(user => ({
        ...user,
        value: circle.userValues[user.id],
        relativeValue: parseFloat(
          (circle.userValues[user.id] - circleMeanValue).toFixed(2)
        ),
        proportionalValue: parseFloat(
          (circle.userValues[user.id] / circle.totalValue).toFixed(2)
        ),
      }))
      .sort((a, b) => b.value - a.value);
  };

  render() {
    const usersWithValueData = this.getUsersWithValueData();
    const creditors = usersWithValueData.filter(user => user.relativeValue > 0);
    const debtors = usersWithValueData.filter(user => user.relativeValue < 0);

    return (
      <React.Fragment>
        <OverviewBar
          usersWithValueData={usersWithValueData}
          onClick={this.handleToggleDrawer}
        />
        <Drawer
          classes={{ modal: sass.OverviewModal, paper: sass.drawer }}
          width={240}
          anchor="right"
          open={this.state.isDrawerOpen}
          onClose={this.handleToggleDrawer}
        >
          <WhoSpentWhat
            usersWithValueData={usersWithValueData}
            totalValue={this.props.circle.totalValue}
          />
          <WhoOwnsWhatToWhom creditors={creditors} debtors={debtors} />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(OverviewView);
