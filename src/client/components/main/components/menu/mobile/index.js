import * as selectors from '../../../../../selectors';
import constants from '../../../../../../constants';
import { connect } from 'react-redux';
import Component from './Menu';

export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
    isOpenMenu: selectors.getMenu(state),
});

export const mapDispatchToProps = dispatch => ({
    getChat: payload => dispatch({ type: constants.CHAT, payload }),
    getUsers: payload => dispatch({ type: constants.USERS, payload }),
    leaveAccount: payload => dispatch({type: constants.LEAVE, payload}),
    settings: payload=> dispatch({type: constants.HANDLE_OPEN_MODAL, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);