import styled from 'styled-components';

export const Wrapper = styled.div`
      display: flex;
      width: 100%;
      min-height: 100vh;
      background-color: ${props => props.theme.login.backgroundLogin};
      justify-content: center;
      flex-direction: column;
      align-items: center;
`;

Wrapper.logo = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/logo.png',
    width: '200px',
    height: '100px'
}))`
`;

export const Form = styled.div`
     border: 1px solid ${props => props.theme.login.borderForm};
     box-shadow: 0 0 1px ${props => props.theme.login.borderForm};
     background-color: ${props => props.theme.login.backgroundFrom};
     padding: 10px;
     width: 80%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

Email.input = styled.input`
    border: none;
    background-color: transparent;
    font-size: 16px;
    margin-top: 10px;
    padding: 5px;
    border-bottom: 1px solid ${props => props.theme.login.borderForm};
`;

Email.label = styled.label`
    color: ${props => props.theme.login.textForm};
`;
Form.Email = Email;

export const Password = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

Password.input = styled.input`
    border: none;
    font-size: 16px;
    margin-top: 10px;
    padding: 5px;
    background-color: transparent;
    border-bottom: 1px solid ${props => props.theme.login.borderForm};
`;

Password.label = styled.label`
    color: ${props => props.theme.login.textForm};
`;
Form.Password = Password;

export const Submit = styled.div``;

Submit.button = styled.button`
    padding: 5px 20px;
    max-width: 150px;
    background-color: ${props => props.theme.login.backgroundButton};
    color: ${props => props.theme.login.colorButton};
    border: 1px solid ${props => props.theme.login.borderButton};
    border-radius: 15px;
    margin-bottom: 20px;
`;

Form.Submit = Submit;

export const Navigation = styled.div``;

export const Signin = styled.div``;

Signin.button = styled.button`
    border: none;
    background-color: transparent;
    color: ${props => props.theme.login.colorText};
    margin-bottom: 10px;
    text-decoration: underline;
`;

Navigation.Signin = Signin;

Wrapper.Navigation = Navigation;
Wrapper.Form = Form;