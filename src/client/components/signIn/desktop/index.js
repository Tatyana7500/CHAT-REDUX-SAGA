import * as selectors from '../../../selectors';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import SignIn from './SignIn.jsx';

export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
    createUser: payload => dispatch(actions.createUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);