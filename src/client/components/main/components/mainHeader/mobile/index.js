import * as selectors from '../../../../../selectors';
import { connect } from 'react-redux';
import Component from './MainHeader';

export const mapStateToProps = state => ({
    name: selectors.getName(state),
    theme: selectors.getTheme(state),
    email: selectors.getEmail(state),
});

export default connect(mapStateToProps, null)(Component);