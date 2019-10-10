import * as selectors from '../../selectors';
import { connect } from 'react-redux';
import App from './App';

export const mapStateToProps = state => ({
    theme: selectors.getTheme(state),
});

export default connect(mapStateToProps, null)(App);