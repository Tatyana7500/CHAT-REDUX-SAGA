import * as selectors from '../../../selectors';
import constants from '../../../../constants';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
    theme: selectors.getTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    authUser: payload => dispatch(actions.authUser(payload)),
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
    // translate: payload => dispatch({ type: constants.TRANSLATE, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);