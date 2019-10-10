import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    height:inherit;
    background-image: ${props => props.theme.chatBlock.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Footer = styled.div`
    display:flex;
`;

const textMessage = styled.textarea`
    width:70%;
    outline: none;
    resize: none;
    font-size: 1.3em;
`;

const send = styled.button`
    width: 20%;
    background-color: ${props => props.theme.chatBlock.colorButton};
    color: #fff;
    text-transform: uppercase;
    
    @media (max-width: 1500px) {
        font-size:3vw;
    }
    @media (max-width: 700px) {
        font-size:5vw;
    }
   
    &:hover{
        background-color: ${props => props.theme.chatBlock.colorButtonHover};
    }
`;

const Messages = styled.div`
    overflow: auto;
    height:100%;
`;

Wrapper.Footer = Footer;
Wrapper.Messages = Messages;
Footer.textMessage = textMessage;
Footer.send = send;