import * as selectors from '../../../selectors';
import { connect } from 'react-redux';
import Component from './ThemeDropdown';
import constants from "../../../../constants";

export const mapStateToProps = state => ({
    theme: selectors.getCurrentTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    changeTheme: payload => dispatch({type: constants.CHANGE_THEME, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);