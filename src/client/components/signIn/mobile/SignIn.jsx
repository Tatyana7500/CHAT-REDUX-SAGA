import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, LabelName, LabelConfirmPassword,  Button, InputName, InputConfirmPassword, LabelEmail, LabelPassword, InputEmail, InputPassword, InputSubmit, Logo } from './styledComponent';
import { ThemeProvider } from 'styled-components';

class SignInForm extends React.Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        createUser: PropTypes.func.isRequired,
    };

    submitSignInForm = (event) => {
        event.preventDefault();
        let name = document.getElementById('singinPageNameInput').value;
        let email = document.getElementById('loginPageEmailInput').value;
        let password = document.getElementById('loginPagePasswordInput').value;
        let confirmPassword = document.getElementById('singinPageComfirmPasswordInput').value;

        const data = {
            name, email, password
        };

        this.props.createUser(data);
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
                            <LabelName>
                                Your Name
                            </LabelName>
                            <InputName/>
                            <LabelPassword>
                                Your Password
                            </LabelPassword>
                            <InputPassword/>
                            <LabelConfirmPassword>
                                Confirm Password
                            </LabelConfirmPassword>
                            <InputConfirmPassword/>
                            <Button>I have account!</Button>
                            <InputSubmit onClick={this.submitSignInForm}/>
                        </Wrapper.form>
                    </Wrapper>
                </ThemeProvider>
            </div>
        );
    }
}

export default SignInForm;