import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
import { connect } from 'react-redux';
import Component from './MainHeader';

export const mapStateToProps = state => ({
    name: selectors.getName(state),
    email: selectors.getEmail(state),
});

export const mapDispatchToProps = dispatch => ({
    leaveAccount: payload => dispatch({ type: constants.LEAVE, payload }),
    getChat: payload => dispatch({ type: constants.CHAT, payload }),
    getUsers: payload => dispatch({ type: constants.USERS, payload }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);