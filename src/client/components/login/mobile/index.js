import * as selectors from '../../../selectors';
import { withTranslation } from 'react-i18next';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    authUser: payload => dispatch(actions.authUser(payload)),
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Login));