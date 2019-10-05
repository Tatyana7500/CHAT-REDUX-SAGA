import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
//import * as actions from '../../actions';
import { connect } from 'react-redux';
import ContentBlock from './ContentBlock';
//import selectors from '../../../../selectors';

export const mapStateToProps = state => ({
    windowState: selectors.getWindowState(state),
});

export const mapDispatchToProps = dispatch => ({
    getUsers: payload => dispatch({ type: constants.USERS, payload }),
    getChat: payload => dispatch({ type: constants.CHAT, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentBlock);