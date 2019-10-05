import * as selectors from '../../../../../../selectors';
import { connect } from 'react-redux';
import Component from './DefaultSettings.jsx';
import constants from "../../../../../../../constants";

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
    setDefaultSettings: payload => dispatch({type: constants.APPLY_DEFAULT_SETTINGS, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);