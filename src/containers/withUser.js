import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../store/ducks/users';
import { isAuthenticated, getSession } from '../helpers/auth';

const mapStateToProps = state => ({
  user: state.users.user,
  loading: state.users.loading,
  error: state.users.error,
  isLogged: !!state.users.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default function withUser(Composed) {
  class withUserComponent extends PureComponent {
    componentWillMount() {
      if (isAuthenticated()) {
        const { user } = getSession();
        this.props.loginSuccess(user);
      }
    }

    render() {
      return <Composed {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withUserComponent);
}
