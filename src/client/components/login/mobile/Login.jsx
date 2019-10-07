import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button, LabelEmail, LabelPassword, InputEmail, InputPassword, InputSubmit, Logo } from './styledComponent';
import { ThemeProvider } from 'styled-components';

class LoginForm extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        authUser: PropTypes.func.isRequired,
    };

    submitLoginForm = (event) => {
        event.preventDefault();
        let email = document.getElementById('loginPageEmailInput').value;
        let password = document.getElementById('loginPagePasswordInput').value;

        const data = {
            emailInput: email,
            passwordInput: password,
        };

        this.props.authUser(data);
    };

    render() {
        const { theme } = this.props;

        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Wrapper>
                        <Logo/>
                        <Wrapper.form>
                            <LabelEmail>
                                Your Email
                            </LabelEmail>
                            <InputEmail/>
                            <LabelPassword>
                                Your Password
                            </LabelPassword>
                            <InputPassword/>
                            <Button>You have not account?</Button>
                            <InputSubmit onClick={this.submitLoginForm}/>
                        </Wrapper.form>
                    </Wrapper>
                </ThemeProvider>
            </div>
        );
    }
}

export default LoginForm;