import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  hasActiveUser:
    state.activeUser && state.activeUser.id && state.activeUser.id.length > 0,
});

const PrivateRoute = ({ component: Component, hasActiveUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasActiveUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default connect(mapStateToProps)(PrivateRoute);
