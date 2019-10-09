import SettingLanguage from '../../common/languageDropdown/desktop';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Navigation, LogIn, SignIn, Form, Name, Email, Password, ConfirmPassword } from './styledComponent';

class SignInForm extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
        createUser: PropTypes.func.isRequired,
    };

    submitSignInForm = (event) => {
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.confirmPassword.value;

        const data = {
            name, email, password,
        };

        this.props.createUser(data);
    };

    render() {
        const { t } = this.props;

        return (
            <Wrapper>
                <Wrapper.settings>
                    <SettingLanguage />
                </Wrapper.settings>
                <Wrapper.Navigation>
                    <Navigation.LogIn>
                        <LogIn.button children={t('login')}/>
                    </Navigation.LogIn>
                    <Navigation.SingIn>
                        <SignIn.button children={t('signIn')}/>
                    </Navigation.SingIn>
                </Wrapper.Navigation>
                <Wrapper.Form>
                    <Form.Name>
                        <Name.label children={t('yourName')}/>
                        <Name.input/>
                    </Form.Name>
                    <Form.Email>
                        <Email.label children={t('yourEmail')}/>
                        <Email.input/>
                    </Form.Email>
                    <Form.Password>
                        <Password.label children={t('yourPassword')}/>
                        <Password.input/>
                    </Form.Password>
                    <Form.ConfirmPassword>
                        <ConfirmPassword.label children={t('yourConfirmPassword')}/>
                        <ConfirmPassword.input/>
                    </Form.ConfirmPassword>
                    <Form.submit onClick={this.submitSignInForm}/>
                </Wrapper.Form>
            </Wrapper>
        );
    }
}

export default SignInForm;