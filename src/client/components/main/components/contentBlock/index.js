import * as selectors from '../../../../selectors';
import constants from '../../../../../constants';
import Component from './ContentBlock';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
    windowState: selectors.getWindowState(state),
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);