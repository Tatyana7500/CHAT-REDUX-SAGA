import * as actions from '../actions';
import { connect } from 'react-redux';
import App from './App.jsx';

export const mapDispatchToProps = dispatch => ({
    translate: payload => dispatch(actions.handleHideModal(payload)),
});

export default connect(null, mapDispatchToProps)(App);