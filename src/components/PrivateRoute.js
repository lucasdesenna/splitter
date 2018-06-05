import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  allowEntry,
  location,
  history,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      allowEntry ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default withRouter(PrivateRoute);
