import SettingLanguage from '../common/languageDropdown/LanguageDropdown.jsx';
import ErrorWindow from '../common/errorWindow/ErrorWindow';
import Modal from '../../libs/modal/Modal.jsx';
import util from '../../utils/requestHelper';
import constants from '../../../constants';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';
import './SignIn.css';

import  { signInUserAction } from '../../actions';

class SignInForm extends React.Component {
    handleHide = () => {
        this.props.dispatch(handleHide(false));
        //this.setState({ isOpenErrorWindow: false });
    };

    submitSignInForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        const data = {
            name, email, password, confirmPassword
        };

        this.props.dispatch(signInUserAction(data));
    };

        // if (password === confirmPassword) {
        //     await this.setState({
        //         name: this.nameInputRef.current.value,
        //         email: this.emailInputRef.current.value,
        //         password: this.passwordInputRef.current.value,
        //     });
        //
        //     const data = {
        //         name: this.nameInputRef.current.value,
        //         email: this.emailInputRef.current.value,
        //         password: this.passwordInputRef.current.value,
        //     };
        //
        //     const response = await util.sendPost(`${constants.LOCALHOST}/signin`, data);
        //
        //     if (response.status !== 200) {
        //         const errorText = await response.text();
        //
        //         this.setState(state => ({
        //             ...state,
        //             errorText,
        //             isOpenErrorWindow: true,
        //         }));
        //     } else {
        //         window.location.href = '/login';
        //     }
        // } else {
        //     const errorText = 'Passwords do not match!';
        //
        //     this.setState(state => ({
        //         ...state,
        //         errorText,
        //         isOpenErrorWindow: true,
        //     }));
        // }

    render() {
        let isSuccess, errorText, isOpenErrorWindow;

        if (this.props.response.signin.hasOwnProperty('response')) {
            isSuccess = this.props.response.register.response.success;
            errorText = this.props.response.register.response.errorText;
            isOpenErrorWindow = this.props.response.register.response.isOpenErrorWindow;
        }
        const { translate, defaultCountry, changeLanguage } = this.props;

        return (
            <div>
                <div className='header__settings'>
                    <SettingLanguage
                        defaultCountry={defaultCountry}
                        changeLanguage={changeLanguage}
                    />
                </div>
                <div className='signin'>
                    <div className='buttons'>
                        <a
                            href='/login'
                            id='singin_loginBtn'
                            className='btn buttons__btn'>
                            {translate('login')}
                        </a>
                        <a
                            href='/signIn'
                            id='singin_singInBtn'
                            className='btn buttons__btn buttons__btn  buttons__btn_active'>
                            {translate('signIn')}
                        </a>
                    </div>
                    <div className='signin-form'>
                        <label
                            name='email'
                            htmlFor='loginPageEmailInput'
                            className='login-form__label'>
                            {translate('yourEmail')}
                        </label>
                        <input
                            name = 'email'
                            type='text'
                            maxLength='25'
                            ref={this.emailInputRef}
                            id='singinPageEmailInput'
                            className='login-form__input'
                            placeholder={translate('eMail')}
                        />
                        <label
                            name='name'
                            htmlFor='singinPageNameInput'
                            className='login-form__label'>{translate('name')}
                        </label>
                        <input
                            name='name'
                            type='text'
                            maxLength='16'
                            ref={this.nameInputRef}
                            id='singinPageNameInput'
                            className='login-form__input'
                            placeholder={translate('name')}
                        />
                        <label
                            name='password'
                            htmlFor='loginPagePasswordInput'
                            className='login-form__label'>{translate('yourPassword')}
                        </label>
                        <input
                            name='password'
                            maxLength='16'
                            type='password'
                            ref={this.passwordInputRef}
                            id='singinPagePasswordInput'
                            className='login-form__input'
                            placeholder={translate('password')}
                        />
                        <label
                            name='confirmPassword'
                            htmlFor='singinPageComfirmPasswordInput'
                            className='login-form__label'>{translate('confirmPassword')}
                        </label>
                        <input
                            name='confrimPassword'
                            maxLength='16'
                            type='password'
                            className='login-form__input'
                            ref={this.confirmPasswordInputRef}
                            id='singinPageComfirmPasswordInput'
                            placeholder={translate('confirmPassword')}
                        />
                        <input
                            type='submit'
                            id='regAccount'
                            value={translate('signIn')}
                            className='btn signin-form__btn'
                            onClick={this.submitSignInForm}
                        />
                    </div>
                </div>
                {isOpenErrorWindow ?
                    <Modal>
                        <div className='modal'>
                            <ErrorWindow
                                error={errorText}
                                handleHide={this.handleHide}
                            >
                            </ErrorWindow>
                        </div>
                    </Modal> : null
                }
            </div>
        );
    }
}

const mapStateToProps = (response) => ({
    response
});

export default connect(mapStateToProps)(SignInForm);