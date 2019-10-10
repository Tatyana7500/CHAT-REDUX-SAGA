import * as constants from '../../../../constants';
import * as selectors from '../../../selectors';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import SignIn from './SignIn.jsx';
import { withTranslation } from 'react-i18next';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    createUser: payload => dispatch(actions.createUser(payload)),
    handleOpenModal: payload => dispatch({type: constants.HANDLE_OPEN_MODAL_ERROR, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SignIn));