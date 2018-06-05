import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import UserRepo from 'repositories/User.repo';
import { setActiveUser } from 'containers/activeUser.actions';

import sass from './SignInView.sass';

const mapStateToProps = state => ({
  hasActiveUser: state.activeUser && state.activeUser.id,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetActiveUser: userData => {
    dispatch(setActiveUser(userData));
  },
});

class SignInView extends React.Component {
  state = {
    loading: false,
  };

  handleSignIn = () => {
    this.setState({ loading: true });

    UserRepo.signIn().then(userData => {
      this.setState({ loading: false });
      this.props.dispatchSetActiveUser(userData);
    });
  };

  render() {
    const { hasActiveUser, location } = this.props;

    if (hasActiveUser) {
      const { from } = location.state || { from: { pathname: '/' } };
      return <Redirect to={from} />;
    }

    return (
      <div className={sass.SignInView}>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          <Button variant="raised" color="primary" onClick={this.handleSignIn}>
            Entrar
          </Button>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInView));
