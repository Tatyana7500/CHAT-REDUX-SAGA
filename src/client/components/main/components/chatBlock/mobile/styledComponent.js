import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: ${props => props.theme.chatBlock.backgroundWrapper};
    border: 1px solid #397A94;
`;

export const Footer = styled.div`
    padding: 0 10px 0 10px;
    width:100%;
`;

export const Send = styled.div`
    display: flex;
`;

export const textMessage = styled.textarea`
    width: 88%;
    padding: 2px 10px 2px 10px;
    height: 70px;
    font-size: 14px;
    outline: none;
    border: 1px solid #000;
    margin-top: 10px;
    resize: none;
`;

export const send = styled.button`
    border: 0;
    background-color: ${props => props.theme.chatBlock.sendBottom};
    color: #fff;
    width: 80%;
    text-transform: uppercase;
    border-radius: 16px;
    display: inline-block;
    cursor: pointer;
    height: 25px;
    margin-left: 20px;
    margin-bottom: 10px;
`;

const Messages = styled.div`
    overflow: auto;
    height: 60vh;
`;

Footer.Send = Send;
Wrapper.Footer = Footer;
Wrapper.Messages = Messages;
Footer.textMessage = textMessage;
Footer.send = send;