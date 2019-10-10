import * as selectors from '../../../../selectors';
import { connect } from 'react-redux';
import Component from './LanguageDropdown.jsx';
import constants from "../../../../../constants";

export const mapStateToProps = state => ({
    defaultLanguage: selectors.getDefaultLanguage(state),
});

export const mapDispatchToProps = dispatch => ({
    changeLanguage: payload => dispatch({type: constants.CHANGE_LANGUAGE, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);