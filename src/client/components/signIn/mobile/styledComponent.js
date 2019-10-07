import styled from 'styled-components';

export const Logo = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/logo.png',
    width: '200px',
    height: '100px'
}))`
    text-align: center;
    display: block;
    margin: 30px auto;
`;

export const Wrapper = styled.div.attrs(props => ({}))`
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    margin-top: 50px;
    padding: 0;
    background-color: ${props => props.theme.signIn.backgroundLogin};
`;

export const Form = styled.form.attrs(props => ({
}))`
    display: flex;
    flex-direction: column;
    height: 60%;
    padding:20px 40px;
    color: ${props => props.theme.signIn.textForm};
`;

Wrapper.form = Form;

export const LabelEmail = styled.label.attrs(props => ({
    name: 'Email',
    htmlFor: 'loginPageEmailInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
`;

export const LabelPassword = styled.label.attrs(() => ({
    name: 'password',
    htmlFor: 'loginPagePasswordInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
`;

export const LabelName = styled.label.attrs(props => ({
    name: 'Name',
    htmlFor: 'loginPageNameInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
`;

export const LabelConfirmPassword = styled.label.attrs(props => ({
    name: 'ConfirmPassword',
    htmlFor: 'loginPageConfirmPasswordInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
`;

export const InputName = styled.input.attrs(() => ({
    name: 'name',
    required: 'required',
    type: 'text',
    maxLength: '16',
    id: 'singinPageNameInput',
    placeholder: 'Name',
}))`
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 10px 10px 0;
    text-align: center;
    border-bottom: 1px solid #000;
    outline: none;
    width: 80%;
    margin: 10px auto;
    height: 30px;
`;

export const InputEmail = styled.input.attrs(() => ({
    name: 'email',
    required: 'required',
    type: 'text',
    maxLength: '16',
    id: 'loginPageEmailInput',
    placeholder: 'Email',
}))`
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 10px 10px 0;
    text-align: center;
    border-bottom: 1px solid #000;
    outline: none;
    width: 80%;
    margin: 10px auto;
    height: 30px;
`;

export const InputPassword = styled.input.attrs(() => ({
    name: 'password',
    required: 'required',
    type: 'password',
    maxLength: '16',
    id: 'loginPagePasswordInput',
    placeholder: 'Password',
}))`
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 10px 10px 0;
    text-align: center;
    border-bottom: 1px solid #000;
    outline: none;
    width: 80%;
    margin: 10px auto;
    height: 30px;
`;

export const InputConfirmPassword = styled.input.attrs(() => ({
    name: 'confirmPassword',
    required: 'required',
    type: 'password',
    maxLength: '16',
    id: 'singinPageComfirmPasswordInput',
    placeholder: 'Confirm password',
}))`
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 10px 10px 0;
    text-align: center;
    border-bottom: 1px solid #000;
    outline: none;
    width: 80%;
    margin: 10px auto;
    height: 30px;
`;

export const InputSubmit = styled.input.attrs(props => ({
    type: 'button',
    id: 'enterAccount',
    value: 'LOGIN',
}))`
    width: 50%;
    margin: 0 auto;
    position: relative;
    margin-top: 15px;
    border: none;
    padding: 10px;
    font-size: 20px;
    border-radius: 30px;
    background-color: ${props => props.theme.signIn.buttonActive};
    color: ${props => props.theme.login.textActive};  
`;

export const Button = styled.a.attrs(props => ({
    id: 'signinBtn',
    href: '/login',
}))`
    border: none;
    text-align: center;
    text-transform: uppercase;
    border-radius: 16px; 
    display: inline-block;
`;