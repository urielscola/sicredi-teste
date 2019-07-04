import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DragonsActions } from '../store/ducks/dragons';

const mapStateToProps = state => ({
  list: state.dragons.list,
  loading: state.dragons.loading,
  error: state.dragons.error,
  detail: state.dragons.detail
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DragonsActions, dispatch);

export default function withDragons(Composed) {
  class withDragonsComponent extends PureComponent {
    componentDidMount() {
      this.props.getDragons();
    }

    render() {
      return <Composed {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withDragonsComponent);
}
