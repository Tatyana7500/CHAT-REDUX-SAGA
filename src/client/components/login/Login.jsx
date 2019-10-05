import SettingLanguage from '../common/languageDropdown';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../theme/index.css';

class LoginForm extends Component {
    static propTypes = {
        authUser: PropTypes.func.isRequired,
    };

    submitLoginForm = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            emailInput: email,
            passwordInput: password,
        };

        this.props.authUser(data);
    };

    render() {
       return (
            <div>
                <div className='header__settings'>
                    <SettingLanguage />
                </div>
                <div className='login-wrapper'>
                    <div className='buttons'>
                        <a
                            id='loginBtn'
                            href='/login'
                            className='btn buttons__btn'>
                            {/*{/ {translate('login')} /}*/}
                            login
                        </a>
                        <a
                            id='singInBtn'
                            href='/signIn'
                            className='btn buttons__btn buttons__btn_active'>
                            {/*{/ {translate('signIn')} /}*/}
                            signIn
                        </a>
                    </div>
                    <form onSubmit={this.submitLoginForm} className='login-form'>
                        <label
                            name='Email'
                            htmlFor='loginPageEmailInput'
                            className='login-form__label'>
                            {/*{/ {translate('yourEmail')} /}*/}
                            yourEmail
                        </label>
                        <input
                            name='email'
                            required
                            type='text'
                            maxLength='16'
                            id='loginPageEmailInput'
                            ref={this.emailInputRef}
                            className='login-form__input'
                            // placeholder={translate('eMail')}
                            placeholder='email'
                        />
                        <label
                            name='password'
                            htmlFor='loginPagePasswordInput'
                            className='login-form__label' >
                            {/*{/ {translate('yourPassword')} /}*/}
                            yourPassword
                        </label>
                        <input
                            name='password'
                            required
                            maxLength='16'
                            type='password'
                            id='loginPagePasswordInput'
                            ref={this.passwordInputRef}
                            className='login-form__input'
                            // placeholder={translate('password')}
                            placeholder='password'
                        />
                        <input
                            type='submit'
                            id='enterAccount'
                            value='login'
                            className='btn login-form__btn'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;