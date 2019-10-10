import * as actions from '../../../../actions';
import { connect } from 'react-redux';
import Component from './ButtonSettings';

export const mapDispatchToProps = dispatch => ({
    openModal: payload => dispatch(actions.handleOpenModal(payload)),
});
export default connect(null, mapDispatchToProps)(Component);