import * as selectors from '../../../../../selectors';
import constants from '../../../../../../constants';
import Component from './ContentBlock';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
    windowState: selectors.getWindowState(state),
});

export const mapDispatchToProps = dispatch => ({
    getChat: payload => dispatch({ type: constants.CHAT, payload }),
    getUsers: payload => dispatch({ type: constants.USERS, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);