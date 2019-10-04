import * as selectors from '../../selectors';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
    authUser: payload => dispatch(actions.authUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);