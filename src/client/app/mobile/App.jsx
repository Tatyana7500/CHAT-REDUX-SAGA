import Settings from '../../components/main/components/settings/mobile';
import ModalContainer from '../../components/modalContainer/mobile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../hocs/privateRoute';
import { ThemeProvider } from 'styled-components';
import SignIn from '../../components/signIn/mobile';
import Login from '../../components/login/mobile';
import Main from '../../components/main/mobile';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../theme/index.css';

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
                        <Route path='/settings' render={props => <Settings {...props} /> } />
                        <PrivateRoute path='/main' component={Main} />
                    </Switch>
                    <ModalContainer/>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;