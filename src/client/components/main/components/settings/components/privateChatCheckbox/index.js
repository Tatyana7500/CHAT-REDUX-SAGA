import * as selectors from '../../../../../../selectors';
import { connect } from 'react-redux';
import Component from './PrivateCheckbox';
import constants from "../../../../../../../constants";

export const mapStateToProps = state => ({
    privateChat: selectors.getActivePrivateChat(state),
});

export const mapDispatchToProps = dispatch => ({
    changeActivePrivateChat: payload => dispatch({type: constants.CHANGE_ACTIVE_PRIVATE_CHAT, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);