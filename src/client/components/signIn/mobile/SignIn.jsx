import React from 'react';
import PropTypes from 'prop-types';
import { Email, Form, Navigation, Password, Wrapper, Submit, Login, Name, ConfirmPassword } from './styledComponent';

class SignInForm extends React.Component {
    static propTypes = {
        createUser: PropTypes.func.isRequired,
        handleOpenModal:PropTypes.func.isRequired,
    };

    submitSignInForm = () => {
        let name = document.getElementById('nameInput').value;
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

    render() {
        const { t } = this.props;

        return (
            <Wrapper>
                <Wrapper.logo/>
                <Wrapper.Form>
                    <Form.Name>
                        <Name.label children={t('yourName')}/>
                        <Name.input id='nameInput' type='text'/>
                    </Form.Name>
                    <Form.Email>
                        <Email.label children={t('yourEmail')}/>
                        <Email.input id='emailInput' type='email'/>
                    </Form.Email>
                    <Form.Password>
                        <Password.label children={t('yourPassword')}/>
                        <Password.input id='passwordInput' type='password'/>
                    </Form.Password>
                    <Form.Email>
                        <ConfirmPassword.label children={t('confirmPassword')}/>
                        <ConfirmPassword.input id='confirmPasswordInput' type='password'/>
                    </Form.Email>
                    <Wrapper.Navigation>
                        <Navigation.Login>
                            <Login.button onClick={this.hrefToSignIn} children={t('notAccount')}/>
                        </Navigation.Login>
                    </Wrapper.Navigation>
                    <Form.Submit>
                        <Submit.button onClick={this.submitSignInForm} children={t('signIn')}/>
                    </Form.Submit>
                </Wrapper.Form>
            </Wrapper>
        );
    }
}

export default SignInForm;