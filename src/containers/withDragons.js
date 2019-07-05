import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DragonsActions } from '../store/ducks/dragons';
import { getDragonList } from '../store/ducks/dragons/selectors';

const mapStateToProps = state => ({
  list: getDragonList(state),
  loading: state.dragons.loading,
  error: state.dragons.error,
  detail: state.dragons.detail
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DragonsActions, dispatch);

export default function withDragons(Composed) {
  class withDragonsComponent extends PureComponent {
    componentDidMount() {
      if (!this.props.list.length) this.props.getDragons();
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
