import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const name = styled.p`
    color: ${props => props.theme.chatCloud.colorTextName};
    font-size: 17px;
`;

export const email = styled.p`
    color: ${props => props.theme.chatCloud.colorTextName};
    font-size: 14px;
`;

export const text = styled.span`
    color: ${props => props.theme.chatCloud.colorText};
`;

export const time = styled.p`
    color:grey;
    font-size:10px;
`;

export const Message = styled.div`
    position:relative;
    min-width:15%;
    max-width:40%;
    width: content;
    word-wrap: break-word;
    border-radius:20px;
    margin-top:20px;
    padding: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: ${props => props.theme.chatCloud.messageBackground};
    color:#fff;
    ${props => props.float ?`align-self: flex-end;` : 'align-self: flex-start;' }
`;

Wrapper.Message = Message;
Message.name = name;
Message.email = email;
Message.text = text;
Message.time = time;