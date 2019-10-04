import * as selectors from '../../../selectors';
import { connect } from 'react-redux';
import Component from './ErrorWindow.jsx';
import constants from "../../../../constants";

export const mapStateToProps = state => ({
    modalContent: selectors.getModalContent(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({type: constants.HANDLE_HIDE_MODAL, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);