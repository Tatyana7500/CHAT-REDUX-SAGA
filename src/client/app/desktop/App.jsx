import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModalContainer from '../../components/modalContainer/desktop';
import PrivateRoute from '../../hocs/privateRoute';
import SignIn from '../../components/signIn/desktop';
import Login from '../../components/login/desktop';
import { ThemeProvider } from 'styled-components';
import Main from '../../components/main/desktop';
import React, { Component } from 'react';
import '../../theme/matrix.css';
import '../../theme/index.css';
import PropTypes from 'prop-types';

class App extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    render() {
        const { theme } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact={true} render={props => <Login {...props} /> } />
                        <Route path='/login' render={props => <Login {...props} /> } />
                        <Route path='/signin' render={props => <SignIn {...props} /> } />
                        <PrivateRoute path='/main' component={Main} />
                    </Switch>
                    <ModalContainer/>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;