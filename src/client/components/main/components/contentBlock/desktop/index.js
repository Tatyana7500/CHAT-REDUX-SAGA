import * as selectors from '../../../../../selectors';
import Component from './ContentBlock';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
    windowState: selectors.getWindowState(state),
});

export default connect(mapStateToProps, null)(Component);