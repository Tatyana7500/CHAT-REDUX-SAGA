import * as selectors from '../../../selectors';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import Main from './Main.jsx';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    hideModal: payload => dispatch(actions.handleHideModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);