import SettingLanguage from '../../common/languageDropdown/desktop';
import React from 'react';
import PropTypes from 'prop-types';
import { Root, Wrapper, Navigation, Login, Signin, Form, Name, Email, Password, ConfirmPassword, Submit } from './styledComponent';

class SignInForm extends React.Component {
    static propTypes = {
        createUser: PropTypes.func.isRequired,
        handleOpenModal:PropTypes.func.isRequired,
    };

    submitSignInForm = () => {
        let name = document.getElementById('loginInput').value;
        let email = document.getElementById('emailInput').value;
        let password = document.getElementById('passwordInput').value;
        let confirmPassword = document.getElementById('confirmPasswordInput').value;

        if(password !== confirmPassword) {
            this.props.handleOpenModal('Passwords do not match!');
        } else {
            const data = {
                name, email, password,
            };

            this.props.createUser(data);
        }
    };

    hrefToLogin = () => {
        window.location.href = '/login';
    };

    render() {
        const { t } = this.props;

        return (
            <Root>
                <Root.Wrapper>
                    <Wrapper.settings>
                        <SettingLanguage/>
                    </Wrapper.settings>
                    <Wrapper.Navigation>
                        <Navigation.Login>
                            <Login.button children={t('login')} onClick={this.hrefToLogin}/>
                        </Navigation.Login>
                        <Navigation.Signin>
                            <Signin.button children={t('signIn')}/>
                        </Navigation.Signin>
                    </Wrapper.Navigation>
                    <Wrapper.Form>
                        <Form.Name>
                            <Name.label children={t('yourName')}/>
                            <Name.input id='loginInput' type='text'/>
                        </Form.Name>
                        <Form.Email>
                            <Email.label children={t('yourEmail')}/>
                            <Email.input id='emailInput' type='email'/>
                        </Form.Email>
                        <Form.Password>
                            <Password.label children={t('yourPassword')}/>
                            <Password.input id='passwordInput' type='password'/>
                        </Form.Password>
                        <Form.ConfirmPassword>
                            <ConfirmPassword.label children={t('confirmPassword')}/>
                            <ConfirmPassword.input id='confirmPasswordInput' type='password'/>
                        </Form.ConfirmPassword>
                        <Form.Submit>
                            <Submit.button onClick={this.submitSignInForm} children={t('signIn')}/>
                        </Form.Submit>
                    </Wrapper.Form>
                </Root.Wrapper>
            </Root>
        );
    }
}

export default SignInForm;