import * as selectors from '../../../selectors';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';

export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    authUser: payload => dispatch(actions.authUser(payload)),
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);