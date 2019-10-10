import * as selectors from '../../../../../selectors';
import { connect } from 'react-redux';
import Component from './ChatCloud';

export const mapStateToProps = state => ({
    name: selectors.getName(state),
    theme: selectors.getTheme(state),
    messages: selectors.getMessagesList(state),
});

export default connect(mapStateToProps, null)(Component);