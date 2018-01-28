// flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import EntryListView from './features/EntryListView/EntryListView';
import OverviewView from './features/OverviewView/OverviewView';

import { fakeCircleData } from 'containers/fakeData';
// import CircleRepository from 'repositories/Circle.repo';
import { setActiveCircle } from 'containers/activeCircle.actions';

const mapStateToProps = state => ({
  activeCircle: state.activeCircle,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetActiveCircle: circleData => {
    dispatch(setActiveCircle(circleData));
  },
});
class App extends Component {
  componentDidMount() {
    // CircleRepository.get().then(circleData => {
    //   this.props.dispatchSetActiveCircle(circleData);
    // });
    this.props.dispatchSetActiveCircle(fakeCircleData);
  }

  isCircleLoaded = () => !!this.props.activeCircle.id;

  render() {
    return this.isCircleLoaded() ? (
      <div className="App">
        <EntryListView circle={this.props.activeCircle} />
        <OverviewView circle={this.props.activeCircle} />
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
