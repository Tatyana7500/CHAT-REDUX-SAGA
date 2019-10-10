import { Email, Form, Navigation, Password, Wrapper, Submit, Signin } from './styledComponent';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    static propTypes = {
        authUser: PropTypes.func.isRequired,
    };

    submitLoginForm = (event) => {
        event.preventDefault();
        let email = document.getElementById('emailInput').value;
        let password = document.getElementById('passwordInput').value;

        const data = {
            emailInput: email,
            passwordInput: password,
        };

        this.props.authUser(data);
    };

    hrefToSignIn = () => {
        window.location.href = '/signin';
    };

    render() {
        const { t } = this.props;

        return (
            <Wrapper>
                <Wrapper.logo/>
                <Wrapper.Form>
                    <Form.Email>
                        <Email.label children={t('yourEmail')}/>
                        <Email.input id='emailInput' type='email'/>
                    </Form.Email>
                    <Form.Password>
                        <Password.label children={t('yourPassword')}/>
                        <Password.input id='passwordInput' type='password'/>
                    </Form.Password>
                    <Wrapper.Navigation>
                        <Navigation.Signin>
                           <Signin.button onClick={this.hrefToSignIn} children={t('notAccount')}/>
                        </Navigation.Signin>
                    </Wrapper.Navigation>
                    <Form.Submit>
                        <Submit.button onClick={this.submitLoginForm} children={t('login')}/>
                    </Form.Submit>
                </Wrapper.Form>
            </Wrapper>
        );
    }
}

export default LoginForm;