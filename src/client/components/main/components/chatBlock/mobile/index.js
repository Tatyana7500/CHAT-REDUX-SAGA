import * as selectors from '../../../../../selectors';
import constants from '../../../../../../constants';
import { connect } from 'react-redux';
import Component from './ChatBlock';


export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
    emoji: selectors.getActiveEmoji(state),
    messageAreaValue: selectors.getMessage(state),
});

export const mapDispatchToProps = dispatch => ({
    clickButtonSend: payload => dispatch({ type: constants.CLICK_BUTTON_SEND, payload }),
    updateMessageValue: payload => dispatch({ type: constants.UPDATE_MESSAGE_VALUE, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);