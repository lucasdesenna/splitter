// flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import EntryListView from './features/EntryListView/EntryListView';
import OverviewView from './features/OverviewView/OverviewView';

import sass from './App.sass';

// import { fakeCircleData } from 'fakeData';
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

class App extends Component {
  componentDidMount() {
    circleRepo.get().then(circleData => {
      this.props.dispatchSetActiveCircle(circleData);
    });
  }

  isCircleLoaded = () => !!this.props.circle && !!this.props.circle.id;

  render() {
    return this.isCircleLoaded() ? (
      <div className={sass.App}>
        <EntryListView />
        <OverviewView />
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
