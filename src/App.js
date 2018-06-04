// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import UserRepo from 'repositories/User.repo';
import { setActiveUser, clearActiveUser } from 'containers/activeUser.actions';

import MainView from 'features/MainView';

import sass from './App.sass';

const history = createBrowserHistory();

const mapStateToProps = state => ({
  activeUser: state.activeUser,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetActiveUser: userData => {
    dispatch(setActiveUser(userData));
  },
  dispatchClearActiveUser: () => {
    dispatch(clearActiveUser());
  },
});

class App extends React.Component {
  authChangeListener: any;

  componentDidMount() {
    const { dispatchSetActiveUser, dispatchClearActiveUser } = this.props;
    const login = userData => {
      dispatchSetActiveUser(userData);
      history.push('/home');
    };

    this.authChangeListener = UserRepo.listenForAuthChange(user => {
      if (user) {
        UserRepo.get(user.uid).then(login);
      } else {
        dispatchClearActiveUser();
        UserRepo.signIn().then(login);
      }
    });
  }

  componentWillUnmount() {
    delete this.authChangeListener;
  }

  render() {
    return (
      <Router className={sass.App} history={history}>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => <div>Splitter is running</div>}
          />
          <Route path="/home" component={MainView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
