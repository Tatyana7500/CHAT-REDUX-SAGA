import styled from 'styled-components';

export const Wrapper = styled.div`
    position:relative;
    display:flex;
    height:100%;
    justify-content: space-around;
    align-items: center;
`;

const btn = styled.button`
    width: 40%;
    height: 50%;
    border-radius: 5px;
    font-size: 1.4em;
    border: 0;
    outline: none;
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    background-color: ${props => props.theme.mainHeader.colorButton};
    transition: 0.5s;
    color: #fff;
    
    &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        background-color: ${props => props.theme.mainHeader.colorButtonHover};
        //color: #D4493E;
    }
    
    @media (max-width: 1500px) {
        font-size:0.7em;
    }
    @media (max-width: 700px) {
       font-size:0.3em;
    }
`;

export const Button = styled.div`
`;

const Settings = styled.div``;

const logout = styled.a`
    text-decoration: none;
    display: block;
    font-size: 2vw;
    background-color: ${props => props.theme.mainHeader.colorButton};
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    
    &:hover{
        background-color: ${props => props.theme.mainHeader.colorButtonHover};
    }
    
    @media (max-width: 1500px) {
        font-size:3vw;
    }
    @media (max-width: 700px) {
        font-size:5vw;
    }
`;

export const Nav = styled.div`
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    height:100%;
    width:20%;
`;

export const UserInfo = styled.div`
    display:flex;
    flex-direction: column;
    font-weight: bold;
    color: ${props => props.theme.mainHeader.color};
`;

const chat = styled(btn)``;
const users = styled(btn)``;
const name = styled.span``;
const email = styled.span``;

Wrapper.UserInfo = UserInfo;
Nav.chat = chat;
Nav.users = users;
Wrapper.Nav = Nav;
Wrapper.Settings = Settings;
Button.logout = logout;
Wrapper.Button = Button;
UserInfo.name = name;
UserInfo.email = email;