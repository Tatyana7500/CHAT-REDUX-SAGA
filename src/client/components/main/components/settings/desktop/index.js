import { connect } from 'react-redux';
import Component from './Settings.jsx';
import constants from "../../../../../../constants";

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch({type: constants.HANDLE_HIDE_MODAL, payload}),
});

export default connect(null, mapDispatchToProps)(Component);