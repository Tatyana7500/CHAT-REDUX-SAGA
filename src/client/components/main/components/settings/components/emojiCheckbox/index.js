import * as selectors from '../../../../../../selectors';
import { connect } from 'react-redux';
import Component from './EmojisCheckbox.jsx';
import constants from "../../../../../../../constants";

export const mapStateToProps = state => ({
    emoji: selectors.getActiveEmoji(state),
});

export const mapDispatchToProps = dispatch => ({
    changeActiveEmoji: payload => dispatch({type: constants.CHANGE_ACTIVE_EMOJI, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);