import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModalContainer from './components/modalContainer';
import PrivateRoute from './hocs/privateRoute.jsx';
import React, { Component } from 'react';
import SignIn from './components/signIn';
import Login from './components/login';
import Main from './components/main';
import './theme/matrix.css';

class App extends Component {
    render() {
              return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} render={props => <Login {...props} /> } />
                    <Route path='/login' render={props => <Login {...props} /> } />
                    <Route path='/signin' render={props => <SignIn {...props} /> } />
                    <Route path='/main' render={props => <Main {...props} /> }/>
                    {/*<PrivateRoute path='/main' render={props => <Main {...props} /> }/>*/}
                </Switch>
                <ModalContainer/>
            </BrowserRouter>
        );
    }
}

export default App;