// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import UserRepo from 'repositories/User.repo';
import { clearActiveUser } from 'containers/activeUser.actions';

import MainView from 'features/MainView';
import SignInView from 'features/SignInView';

import PrivateRoute from 'components/PrivateRoute';

const history = createBrowserHistory();

const mapStateToProps = state => ({
  hasActiveUser: !!state.activeUser && !!state.activeUser.id,
});

const mapDispatchToProps = dispatch => ({
  dispatchClearActiveUser: () => {
    dispatch(clearActiveUser());
  },
});

class App extends React.Component {
  authChangeListener: any;

  componentDidMount() {
    const { dispatchClearActiveUser } = this.props;

    this.authChangeListener = UserRepo.listenForAuthChange(user => {
      if (!user) {
        dispatchClearActiveUser();
      }
    });
  }

  componentWillUnmount() {
    delete this.authChangeListener;
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props =>
              this.props.hasActiveUser ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
          <Route path="/signin" component={SignInView} />
          <PrivateRoute
            path="/home"
            allowEntry={this.props.hasActiveUser}
            component={MainView}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
