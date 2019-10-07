import SettingLanguage from '../../common/languageDropdown/desktop';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button, Settings, LabelEmail, InputEmail, LabelPassword, InputPassword, LabelConfirmPassword,
    InputConfirmPassword, LabelName, InputName, InputSubmit } from './styledComponent';
import { ThemeProvider } from 'styled-components';

class SignInForm extends React.Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        createUser: PropTypes.func.isRequired,
    };

    submitSignInForm = (event) => {
        event.preventDefault();
        let name = document.getElementById('singInPageNameInput').value;
        let email = document.getElementById('singInPageEmailInput').value;
        let password = document.getElementById('loginPagePasswordInput').value;
        let confirmPassword = document.getElementById('singInPageConfirmPasswordInput').value;

        const data = {
            name, email, password,
        };

        this.props.createUser(data);
    };

    render() {
        const { theme } = this.props;

        return (
            <ThemeProvider theme={ theme }>
                <Settings>
                    <SettingLanguage />
                </Settings>
                <Wrapper>
                    <Wrapper.buttons>
                        <Button.logIn>
                            login
                        </Button.logIn>
                        <Button.signIn>
                            signIn
                        </Button.signIn>
                    </Wrapper.buttons>
                    <Wrapper.form>
                        <LabelName>
                            yourName
                        </LabelName>
                        <InputName/>
                        <LabelEmail>
                            yourEmail
                        </LabelEmail>
                        <InputEmail/>
                        <LabelPassword>
                            yourPassword
                        </LabelPassword>
                        <InputPassword/>
                        <LabelConfirmPassword>
                            confirmPassword
                        </LabelConfirmPassword>
                        <InputConfirmPassword/>
                        <InputSubmit onClick={this.submitSignInForm}/>
                    </Wrapper.form>
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default SignInForm;