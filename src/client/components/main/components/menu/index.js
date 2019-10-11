import constants from '../../../../../constants';
import { connect } from 'react-redux';
import Component from './Menu';

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({type: constants.HANDLE_HIDE_MODAL, payload}),
    getChat: payload => dispatch({ type: constants.CHAT, payload }),
    getUsers: payload => dispatch({ type: constants.USERS, payload }),
    leaveAccount: payload => dispatch({type: constants.LEAVE, payload}),
    settings: payload=> dispatch({type: constants.SETTINGS_MOBILE, payload}),
});

export default connect(null, mapDispatchToProps)(Component);