import styled from 'styled-components';

const buttonsIndent = 5;
const minWrapperWidth = 460;
const minWrapperHeight = 390;

export const Buttons = styled.div.attrs(props => ({
}))`
    padding: ${buttonsIndent}px 0;
    background-color: ${props => props.theme.buttonsWrapperColor};
    text-align: center;
    flex:1;
`;

export const Wrapper = styled.div.attrs(props => ({}))`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px ${props => props.theme.shadowColor};
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundLogin};
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 25%;
    justify-content: space-around;
    min-width: ${minWrapperWidth}px;
    min-height: ${minWrapperHeight}px;
`;


Wrapper.Buttons = Buttons;

export const Button = styled.a.attrs(props => ({
    id: 'loginBtn',
    href: '/login',
}))`
    border: none;
    width: 35%;
    text-transform: uppercase;
    border-radius: 16px; 
    display: inline-block;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme.buttonHover};
        color: var(--color-textNotActive)${props => props.theme.textNotActive};
        box-shadow: 0 0 5px var(--color-btnShadow)${props => props.theme.buttonShadow};
    }
`;

export const btn = styled(Button)`
    width: 35%;
    position: relative;
    border-radius: 20px;
    transform: translate(0,50%);
    display: inline-block;
    text-decoration: none;
    margin: 0 5px 20px 5px;
    background-color: ${props => props.theme.buttonHover};
`;

Button.btn = btn;

export const Settings = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid ${props => props.theme.settingsBorderBottom};
`;

export const Form = styled.form.attrs(props => ({
    // onSubmit: this.submitLoginForm,
}))`
    display: flex;
    flex-direction: column;
    height: 60%;
    padding:20px 40px 20px 40px;
    color: ${props => props.theme.textForm};
`;

Wrapper.form = Form;

export const LabelEmail = styled.label.attrs(props => ({
    name: 'Email',
    htmlFor: 'loginPageEmailInput',
}))`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 50%;
    margin: 0 auto;
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

export const InputEmail = styled.input.attrs(() => ({
    name: 'email',
    required: 'required',
    type: 'text',
    maxLength: '16',
    id: 'loginPageEmailInput',
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

export const InputSubmit = styled(Button).attrs(props => ({
    type: 'submit',
    id: 'enterAccount',
    value: 'login',
}))`
    width: 35%;
    margin:0 auto;
    position: relative;
    top:10%;
    background-color: ${props => props.theme.buttonActive};
    color: ${props => props.theme.textActive};
`;