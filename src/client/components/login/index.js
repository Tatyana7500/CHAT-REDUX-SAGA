import { getIsModalOpen, } from '../../selectors';
import constants from '../../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';

export const mapStateToProps = state => ({
    isModalOpen: getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({ type: constants.HANDLE_HIDE_MODAL, payload}),
    enterUser: payload => dispatch({ type: constants.ENTER_USER, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);