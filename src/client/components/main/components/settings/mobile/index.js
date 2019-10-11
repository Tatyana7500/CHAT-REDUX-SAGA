import { connect } from 'react-redux';
import Component from './Settings.jsx';
import constants from "../../../../../../constants";

export const mapDispatchToProps = dispatch => ({
    hrefMainPage: payload => dispatch({type: constants.HREF_MAIN_PAGE, payload}),
});

export default connect(null, mapDispatchToProps)(Component);