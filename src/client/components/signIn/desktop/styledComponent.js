import styled from 'styled-components';

export const Root = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-image: ${props => props.theme.signIn.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
`;

export const Wrapper = styled.div`
    background-color: ${props => props.theme.signIn.backgroundWrapper};
    color: ${props => props.theme.login.color};
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 500px;
    min-height: 250px;
    align-self: center;
    border-radius: 10px;
    position: relative;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
`;

Root.Wrapper = Wrapper;

Wrapper.settings = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    flex: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #fff;
`;

export const Navigation = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: 5% 5% 0 5%;
    align-self: center;
`;

export const Login = styled.div`
    width: 30%;
    padding: 0;
    margin: 0;
    height: 100%;
`;

Login.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.signIn.colorButton};
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    border-radius: 5px;

    &:hover{
        background-color: ${props => props.theme.signIn.colorButtonHover};
    }
`;

export const Signin = styled.div`
    width: 30%;
    padding: 0;
    margin: 0;
    height: 100%;
`;

Signin.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.signIn.colorButtonActive};
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    border-radius: 5px;
`;

Navigation.Login = Login;
Navigation.Signin = Signin;

Wrapper.Navigation = Navigation;

export const Form = styled.div`
    display: flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    align-self: center;
    align-items: center;
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

Name.label = styled.label``;
Name.input = styled.input`
    width: 50%;
    height: 100%;
`;

Form.Name = Name;

export const Email = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

Email.label = styled.label``;
Email.input = styled.input`
    width: 50%;
    height: 100%;
`;

Form.Email = Email;

export const Password = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

Password.label = styled.label``;
Password.input = styled.input`
    width: 50%;
    height: 100%;
`;

Form.Password = Password;

export const ConfirmPassword = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

ConfirmPassword.label = styled.label``;
ConfirmPassword.input = styled.input`
    width: 50%;
    height: 100%;
`;

Form.ConfirmPassword = ConfirmPassword;

export const Submit = styled.div`
    width: 30%;
    padding: 0;
    margin: 0;
`;

Submit.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.signIn.colorButton};
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    border-radius: 5px;
    
    &:hover{
        background-color: ${props => props.theme.signIn.colorButtonHover};
    }
`;

Form.Submit = Submit;

Wrapper.Form = Form;