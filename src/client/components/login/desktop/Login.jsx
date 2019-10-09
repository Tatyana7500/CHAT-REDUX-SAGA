import SettingLanguage from '../../common/languageDropdown/desktop';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../theme/index.css';
import { Wrapper, Submit, Email, Navigation, Form, Login, Password, Signin } from './styledComponent';

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
        const { t, theme } = this.props;

        return (
            <Wrapper>
                <Wrapper.settings>
                    <SettingLanguage/>
                </Wrapper.settings>
                <Wrapper.Navigation>
                        <Navigation.Login>
                            <Login.button children={t('login')}/>
                        </Navigation.Login>
                        <Navigation.Signin>
                            <Signin.button children={t('signIn')}/>
                        </Navigation.Signin>
                </Wrapper.Navigation>
                <Wrapper.Form>
                    <Form.Email>
                        <Email.label children={t('yourEmail')}/>
                        <Email.input/>
                    </Form.Email>
                    <Form.Password>
                        <Password.label children={t('yourPassword')}/>
                        <Password.input/>
                    </Form.Password>
                    <Form.Submit>
                        <Submit.button onClick={this.submitLoginForm} children={t('login')}/>
                    </Form.Submit>
                </Wrapper.Form>
            </Wrapper>
        );
    }
}

export default LoginForm;