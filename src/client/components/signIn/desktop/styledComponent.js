import styled from 'styled-components';

const buttonsIndent = 5;
const minWrapperWidth = 460;
const minWrapperHeight = 490;

export const Buttons = styled.div.attrs(() => ({
}))`
    padding: ${buttonsIndent}px 0;
    background-color: ${props => props.theme.signIn.buttonsWrapperColor};
    text-align: center;
    flex:1;
`;

export const Wrapper = styled.div.attrs(() => ({}))`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px ${props => props.theme.signIn.shadowColor};
    border: 1px solid ${props => props.theme.signIn.borderColor};
    background-color: ${props => props.theme.signIn.backgroundLogin};
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 5%;
    justify-content: space-around;
    min-width: ${minWrapperWidth}px;
    min-height: ${minWrapperHeight}px;
`;

Wrapper.buttons = Buttons;

export const Button = styled.a`
    border: none;
    width: 40%;
    height: 50%;
    text-transform: uppercase;
    border-radius: 16px; 
    display: inline-block;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme.signIn.buttonHover};
        color: ${props => props.theme.signIn.textNotActive};
        box-shadow: 0 0 5px ${props => props.theme.signIn.buttonShadow};
    }
`;

export const logIn = styled(Button).attrs(() => ({
    id: 'loginBtn',
    href: '/login',
}))``;

export const btn = styled(Button)`
    width: 35%;
    position: relative;
    border-radius: 20px;
    transform: translate(0,50%);
    display: inline-block;
    text-decoration: none;
    margin: 0 5px 20px 5px;
    background-color: ${props => props.theme.signIn.buttonHover};
`;

export const signIn = styled(Button).attrs(() => ({
    id: 'signInBtn',
    href: '/signIn',
}))``;

Button.logIn = logIn;
Button.signIn = signIn;

Button.btn = btn;

export const Settings = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
`;

export const Form = styled.form.attrs(() => ({
}))`
    display: flex;
    flex-direction: column;
    height: 60%;
    padding:20px 40px 20px 40px;
    color: ${props => props.theme.signIn.textForm};
`;

Wrapper.form = Form;

export const LabelName = styled.label.attrs(() => ({
    name: 'text',
    htmlFor: 'singInPageNameInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 50%;
    margin: 0 auto;
`;

export const InputName = styled.input.attrs(() => ({
    name: 'text',
    required: 'required',
    type: 'text',
    maxLength: '16',
    id: 'singInPageNameInput',
    placeholder: 'email',
}))`
    display: block;
    position: relative;
    background-color: #b3bcc9;
    border: 0;
    padding: 10px;
    box-shadow: inset 0 0 3px #000;
    border-radius: 6px;
    outline: none;
    width: 50%;
    margin: 0 auto;
    height: 30px;
`;

export const LabelEmail = styled.label.attrs(() => ({
    name: 'email',
    htmlFor: 'singInPageEmailInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 50%;
    margin: 0 auto;
`;

export const InputEmail = styled.input.attrs(() => ({
    name: 'email',
    required: 'required',
    type: 'text',
    maxLength: '16',
    id: 'singInPageEmailInput',
    placeholder: 'email',
}))`
    display: block;
    position: relative;
    background-color: #b3bcc9;
    border: 0;
    padding: 10px;
    box-shadow: inset 0 0 3px #000;
    border-radius: 6px;
    outline: none;
    width: 50%;
    margin: 0 auto;
    height: 30px;
`;

export const LabelPassword = styled.label.attrs(() => ({
    name: 'password',
    htmlFor: 'loginPagePasswordInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 50%;
    margin: 0 auto;
`;

export const InputPassword = styled.input.attrs(() => ({
    name: 'password',
    required: 'required',
    type: 'password',
    maxLength: '16',
    id: 'loginPagePasswordInput',
    placeholder: 'password',
}))`
    display: block;
    position: relative;
    background-color: #b3bcc9;
    border: 0;
    padding: 10px;
    box-shadow: inset 0 0 3px #000;
    border-radius: 6px;
    outline: none;
    width: 50%;
    margin: 0 auto;
    height: 30px;
`;

export const LabelConfirmPassword = styled.label.attrs(() => ({
    name: 'confirmPassword',
    htmlFor: 'singInPageConfirmPasswordInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 50%;
    margin: 0 auto;
`;

export const InputConfirmPassword = styled.input.attrs(() => ({
    name: 'confirmPassword',
    required: 'required',
    type: 'password',
    maxLength: '16',
    id: 'singInPageConfirmPasswordInput',
    placeholder: 'password',
}))`
    display: block;
    position: relative;
    background-color: #b3bcc9;
    border: 0;
    padding: 10px;
    box-shadow: inset 0 0 3px #000;
    border-radius: 6px;
    outline: none;
    width: 50%;
    margin: 0 auto;
    height: 30px;
`;

export const InputSubmit = styled.input.attrs(() => ({
    type: 'button',
    id: 'regAccount',
    value: 'signIn',
}))`
    width: 35%;
    margin:0 auto;
    position: relative;
    top:10%;
    background-color: ${props => props.theme.signIn.buttonActive};
    color: ${props => props.theme.signIn.textActive};
`;