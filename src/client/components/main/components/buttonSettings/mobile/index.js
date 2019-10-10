import { connect } from 'react-redux';
import Component from './ButtonSettings';
import constants from '../../../../../../constants';

export const mapDispatchToProps = dispatch => ({
    openModal: payload => dispatch({type: constants.HANDLE_OPEN_MENU, payload}),
});

export default connect(null, mapDispatchToProps)(Component);