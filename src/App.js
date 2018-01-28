import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CircleRepository from 'repositories/Circle.repo';
import EntryListView from './features/EntryListView/EntryListView';
import OverviewView from './features/OverviewView/OverviewView';

import { setActiveCircle } from 'containers/activeCircle.actions';

const mapDispatchToProps = dispatch => ({
  dispatchSetActiveCircle: circleData => {
    dispatch(setActiveCircle(circleData));
  },
});
class App extends Component {
  componentDidMount() {
    CircleRepository.get().then(circleData => {
      this.props.dispatchSetActiveCircle(circleData);
    });
  }

  render() {
    return (
      <div className="App">
        <EntryListView />
        <OverviewView />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(App);
