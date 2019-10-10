import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: #D2DADF;
    border: 1px solid #397A94;
`;

export const Footer = styled.div`
    
    padding: 0 10px 0 10px;
    width:100%;
`;

export const TextMessage = styled.textarea.attrs(props => ({
    id: 'textMassage',
    value: props.messageAreaValue,
    placeholder: 'Your message',
}))`
    width: 88%;
    padding: 2px 10px 2px 10px;
    height: 70px;
    font-size: 14px;
    outline: none;
    border: 1px solid #000;
    margin-top: 10px;
    resize: none;
`;

export const Button = styled.button`
    border: 0;
    background-color: ${props => props.theme.chatBlock.sendBottom} ;
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

export const Send = styled.div`
    display: flex;
`;

Footer.textField = TextMessage;
Footer.send = Button;