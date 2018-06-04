// @flow
import React from 'react';
import { connect } from 'react-redux';

import EntryListView from 'features/EntryListView/EntryListView';
import OverviewView from 'features/OverviewView/OverviewView';

import circleRepo from 'repositories/Circle.repo';
import { setActiveCircle } from 'containers/activeCircle.actions';

const mapStateToProps = state => ({
  circle: state.activeCircle.circle,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetActiveCircle: circleData => {
    dispatch(setActiveCircle(circleData));
  },
});

class MainView extends React.Component {
  componentDidMount() {
    circleRepo.get().then(circleData => {
      this.props.dispatchSetActiveCircle(circleData);
    });
  }

  isCircleLoaded = () => !!this.props.circle && !!this.props.circle.id;

  render() {
    return this.isCircleLoaded() ? (
      <div>
        <EntryListView />
        <OverviewView />
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
