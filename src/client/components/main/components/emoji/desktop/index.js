import * as selectors from '../../../../../selectors';
import constants from '../../../../../../constants';
import { connect } from 'react-redux';
import Component from './Emoji.jsx';

export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
    emojiMenu: selectors.getEmojiMenu(state),
});

export const mapDispatchToProps = dispatch => ({
    showEmoji: payload => dispatch({ type: constants.SHOW_MENU_EMOJI, payload }),
    addEmoji: payload => dispatch({ type: constants.ADD_EMOJI_TO_MESSAGE, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);