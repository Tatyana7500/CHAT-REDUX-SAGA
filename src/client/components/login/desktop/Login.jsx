import SettingLanguage from '../../common/languageDropdown/desktop';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../theme/index.css';
import { Wrapper, Submit, Email, Navigation, Form, Login, Password, Signin, Root } from './styledComponent';

class LoginForm extends Component {
    static propTypes = {
       authUser: PropTypes.func.isRequired,
    };

    submitLoginForm = () => {
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
            <Root>
                <Wrapper>
                    <Wrapper.settings>
                        <SettingLanguage/>
                    </Wrapper.settings>
                    <Wrapper.Navigation>
                            <Navigation.Login>
                                <Login.button children={t('login')}/>
                            </Navigation.Login>
                            <Navigation.Signin>
                                <Signin.button children={t('signIn')} onClick={this.hrefToSignIn}/>
                            </Navigation.Signin>
                    </Wrapper.Navigation>
                    <Wrapper.Form>
                        <Form.Email>
                            <Email.label children={t('yourEmail')}/>
                            <Email.input id='emailInput' type='email'/>
                        </Form.Email>
                        <Form.Password>
                            <Password.label children={t('yourPassword')}/>
                            <Password.input id='passwordInput' type='password'/>
                        </Form.Password>
                        <Form.Submit>
                            <Submit.button onClick={this.submitLoginForm} children={t('login')}/>
                        </Form.Submit>
                    </Wrapper.Form>
                </Wrapper>
            </Root>
        );
    }
}

export default LoginForm;