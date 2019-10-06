import SettingLanguage from '../../common/languageDropdown';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../theme/index.css';
import { Wrapper, Settings, Button, LabelEmail, LabelPassword, InputEmail, InputPassword, InputSubmit } from './styledComponent';
import { ThemeProvider } from 'styled-components';

class LoginForm extends Component {
    static propTypes = {
        // t: PropTypes.func.isRequired,
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
                    <Settings>
                        <SettingLanguage />
                    </Settings>
                    <Wrapper>
                        <Wrapper.Buttons>
                            <Button>
                                <Button.btn>
                                    login
                                </Button.btn>
                            </Button>
                            <Button>
                                <Button.btn>
                                    signIn
                                </Button.btn>
                            </Button>
                        </Wrapper.Buttons>
                        <Wrapper.form>
                            <LabelEmail>
                                yourEmail
                            </LabelEmail>
                            <InputEmail/>
                            <LabelPassword>
                                yourPassword
                            </LabelPassword>
                            <InputPassword/>
                            <InputSubmit onClick={this.submitLoginForm}/>
                        </Wrapper.form>
                    </Wrapper>
                </ThemeProvider>
            </div>
        );
    }
}

export default LoginForm;