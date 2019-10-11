import styled from 'styled-components';

export const Root = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.login.backgroundColor};

    //background-image: url('/src/client/assets/icons/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
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
    background-color: rgba(255, 255, 255, 0.8);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    width: 20%;
    padding: 0;
    margin: 0;
    height: 100%;
`;

Login.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: steelblue;
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    
    &:hover{
        background-color: khaki;
        color: #000;
    }
`;

export const Signin = styled.div`
    width: 20%;
    padding: 0;
    margin: 0;
    height: 100%;
`;

Signin.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: steelblue;
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    
    &:hover{
        background-color: khaki;
        color: #000;
    }
`;

Navigation.Login = Login;
Navigation.Signin = Signin;

export const Form = styled.div`
    display: flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    align-self: center;
    align-items: center;
`;

export const Email = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

Email.input = styled.input`
    width: 50%;
    height: 100%;
`;

Email.label = styled.label``;
Form.Email = Email;

export const Password = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 5%;
`;

Password.input = styled.input`
    width: 50%;
    height: 100%;
`;

Password.label = styled.label``;
Form.Password = Password;

export const Submit = styled.div`
    width: 20%;
    padding: 0;
    margin: 0;
`;

Submit.button = styled.button`
    width: 100%;
    margin: 0;
    background-color: steelblue;
    text-transform: uppercase;
    color: #fff;
    border: none;
    height: 100%;
    
    &:hover{
        background-color: khaki;
        color: #000;
    }
`;

Form.Submit = Submit;

Wrapper.Navigation = Navigation;
Wrapper.Form = Form;