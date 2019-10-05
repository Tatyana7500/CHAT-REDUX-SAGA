import * as selectors from '../../selectors';
import { connect } from 'react-redux';
import Component from './ModalContainer.jsx';
import constants from "../../../constants";

export const mapStateToProps = state => ({
    modalType: selectors.getModalType(state),
    isModalOpen: selectors.getIsModalOpen(state),
    modalContent: selectors.getModalContent(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({type: constants.HANDLE_HIDE_MODAL, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);