import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    
    height:inherit;
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
`;

const Messages = styled.div`
    overflow: auto;
   height:100%;
   
`;



Wrapper.Footer = Footer;
Wrapper.Messages = Messages;
Footer.textMessage = textMessage;
Footer.send = send;
