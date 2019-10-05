import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
//import * as actions from '../../actions';
import { connect } from 'react-redux';
import MainHeader from './MainHeader';
//import selectors from '../../../../selectors';

export const mapStateToProps = state => ({
    setName: selectors.getName(state),
    setEmail: selectors.getEmail(state),
});

export const mapDispatchToProps = dispatch => ({
    leaveAccount: payload => dispatch({ type: constants.LEAVE, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);