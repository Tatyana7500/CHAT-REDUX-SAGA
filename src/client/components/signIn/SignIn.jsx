import SettingLanguage from '../common/languageDropdown/LanguageDropdown.jsx';
import React from 'react';
import './SignIn.css';
import PropTypes from 'prop-types';

class SignInForm extends React.Component {
    static propTypes = {
        createUser: PropTypes.func.isRequired,
    };

    submitSignInForm = (event) => {
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.confirmPassword.value;

        const data = {
            name, email, password
        };

       this.props.createUser(data);
    };

    render() {
        return (
            <div>
                {/*<div className='header__settings'>*/}
                {/*    <SettingLanguage*/}
                {/*        defaultCountry={defaultCountry}*/}
                {/*        changeLanguage={changeLanguage}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className='signin'>
                    <div className='buttons'>
                        <a
                            href='/login'
                            id='singin_loginBtn'
                            className='btn buttons__btn'>
                            login
                            {/*{translate('login')}*/}
                        </a>
                        <a
                            href='/signIn'
                            id='singin_singInBtn'
                            className='btn buttons__btn buttons__btn  buttons__btn_active'>
                            signIn
                            {/*{translate('signIn')}*/}
                        </a>
                    </div>
                    <form onSubmit={this.submitSignInForm} className='signin-form'>
                        <label
                            name='email'
                            htmlFor='loginPageEmailInput'
                            className='login-form__label'>
                            yourEmail
                            {/*{translate('yourEmail')}*/}
                        </label>
                        <input
                            name = 'email'
                            type='text'
                            maxLength='25'
                            ref={this.emailInputRef}
                            id='singinPageEmailInput'
                            className='login-form__input'
                            placeholder= 'eMail'
                            // placeholder={translate('eMail')}
                        />
                        <label
                            name='name'
                            htmlFor='singinPageNameInput'
                            className='login-form__label'>
                            name
                            {/*{translate('name')}*/}
                        </label>
                        <input
                            name='name'
                            type='text'
                            maxLength='16'
                            ref={this.nameInputRef}
                            id='singinPageNameInput'
                            className='login-form__input'
                            placeholder='name'
                            // placeholder={translate('name')}
                        />
                        <label
                            name='password'
                            htmlFor='loginPagePasswordInput'
                            className='login-form__label'>
                            yourPassword
                            {/*{translate('yourPassword')}*/}
                        </label>
                        <input
                            name='password'
                            maxLength='16'
                            type='password'
                            ref={this.passwordInputRef}
                            id='singinPagePasswordInput'
                            className='login-form__input'
                            placeholder='password'
                            // placeholder={translate('password')}
                        />
                        <label
                            name='confirmPassword'
                            htmlFor='singinPageComfirmPasswordInput'
                            className='login-form__label'>
                            confirmPassword
                            {/*{translate('confirmPassword')}*/}
                        </label>
                        <input
                            name='confirmPassword'
                            maxLength='16'
                            type='password'
                            className='login-form__input'
                            ref={this.confirmPasswordInputRef}
                            id='singinPageComfirmPasswordInput'
                            placeholder='confirmPassword'
                            // placeholder={translate('confirmPassword')}
                        />
                        <input
                            type='submit'
                            id='regAccount'
                            value='signIn'
                            // value={translate('signIn')}
                            className='btn signin-form__btn'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInForm;