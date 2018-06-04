import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserRepo from 'repositories/User.repo';

const mapStateToProps = state => ({
  isUserAuthenticated: state.auth.isAuthenticated,
});

class SignInView extends React.Component {
  state = {
    loading: false,
    userEmail: '',
    userPassword: '',
  };

  componentDidMount() {
    this.setState({ loading: true });

    UserRepo.signIn();
    // .then(response => {
    //   response.additionalUserInfo.profile;
    //   console.log(response);
    // })
    // .finally(() => {
    //   this.setState({ loading: false });
    // });
  }

  handleInputChangeFor = (targetStateAttr, event) => {
    event.preventDefault();
    const newValue = event.target.value;

    this.setState({ [targetStateAttr]: newValue });
  };

  render() {
    if (this.props.isUserAuthenticated) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return <Redirect to={from} />;
    }

    return '';
  }
}

export default connect(mapStateToProps)(SignInView);
