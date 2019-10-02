import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './hocs/privateRoute.jsx';
import SignIn from './components/signIn/index.jsx';
import Login from './components/login';
import Main from './components/main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact={true} render={props => <Login {...props} /> } />
                        <Route path='/login' render={props => <Login {...props} /> } />
                        <Route path='/signin' render={props => <SignIn {...props} /> }/>
                        <PrivateRoute path='/main' render={props => <Main {...props} /> }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;