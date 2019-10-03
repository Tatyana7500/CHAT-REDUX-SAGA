import SettingLanguage from '../common/languageDropdown/LanguageDropdown.jsx';
import util from '../../utils/requestHelper';
import React, { Component } from 'react';
import constants from '../../../constants';
import '../../theme/index.css';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    static propTypes = {
        handleHide: PropTypes.func.isRequired,
        enterUser: PropTypes.func.isRequired,
        isModalOpen: PropTypes.bool.isRequired,
        errorText: PropTypes.string.isRequired,
        isSuccessRegister: PropTypes.bool.isRequired,
    };

    submitLoginForm = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            emailInput: email,
            passwordInput: password,
        };

        this.props.enterUser(data);
    };

    render() {
        const { translate, defaultCountry, changeLanguage } = this.props;

        return (
            <div>
                <div className='header__settings'>
                    {/* <SettingLanguage
                        defaultCountry={defaultCountry}
                        changeLanguage={changeLanguage}
                    /> */}
                </div>
                <div className='login-wrapper'>
                    <div className='buttons'>
                        <a
                            id='loginBtn'
                            href='/login'
                            className='btn buttons__btn'>
                            {/ {translate('login')} /}
                            login
                        </a>
                        <a
                            id='singInBtn'
                            href='/signIn'
                            className='btn buttons__btn buttons__btn_active'>
                            {/ {translate('signIn')} /}
                            signIn
                        </a>
                    </div>
                    <div className='login-form'>
                        <label
                            name='Email'
                            htmlFor='loginPageEmailInput'
                            className='login-form__label'>
                            {/ {translate('yourEmail')} /}
                            yourEmail
                        </label>
                        <input
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
                            {/ {translate('yourPassword')} /}
                            yourPassword
                        </label>
                        <input
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
                            onClick={this.submitLoginForm}
                            className='btn login-form__btn'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;