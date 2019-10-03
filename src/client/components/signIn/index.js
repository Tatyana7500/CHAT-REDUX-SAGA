import { getIsModalOpen, } from '../../selectors';
import constants from '../../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import SignIn from './SignIn.jsx';
import './SignIn.css';

export const mapStateToProps = state => ({
    isModalOpen: getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({ type: constants.HANDLE_HIDE_MODAL, payload}),
    createUser: payload => dispatch({ type: constants.CREATE_USER, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);