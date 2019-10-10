import * as selectors from '../../../selectors';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import Main from './Main.jsx';
import constants from '../../../../constants';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
    initSockets: () => dispatch({ type: constants.INIT_SOCKETS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);