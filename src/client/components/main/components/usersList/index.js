import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
//import * as actions from '../../actions';
import { connect } from 'react-redux';
import UsersList from './UsersList';
//import selectors from '../../../../selectors';

export const mapStateToProps = state => ({
    users: selectors.getUsers(state),
});

export const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);