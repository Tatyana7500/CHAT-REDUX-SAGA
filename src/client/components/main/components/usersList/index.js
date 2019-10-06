import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
import * as actions from '../../../../actions';
import { connect } from 'react-redux';
import Component from './UsersList';

export const mapStateToProps = state => ({
    id: selectors.getIdSender(state),
    users: selectors.getUsers(state),
    usersOnline: selectors.getUsersOnline(state),
});

export const mapDispatchToProps = dispatch => ({
    openPrivateChat: payload => dispatch({ type: constants.OPEN_PRIVATE_CHAT, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);