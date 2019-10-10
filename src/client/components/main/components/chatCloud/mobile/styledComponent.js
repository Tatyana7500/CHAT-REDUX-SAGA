import styled from 'styled-components';

export const MessageField = styled.div.attrs(() => ({
    id: 'massageField',
}))`
    width: 100%;
    height: 85%;
    position: relative;
    overflow: auto;
    margin: 0 auto;
    scrollbar-width: none;
`;

export const Name = styled.p`
    color: red;
    font-size: 17px;
`;

export const Email = styled.p`
    color: red;
    font-size: 14px;
`;

export const Text = styled.span`
    color: ${props => props.theme.chatCloud.colorText}
`;

export const Time = styled.p`
    color:grey;
    font-size:10px;
`;

export const Message = styled.div`
    width: 70%;
    background-color: ${props => props.theme.chatCloud.messageBackground};
    margin: 5px;
    padding: 10px;
`;

export const MessageSender = styled(Message)`
    float: right;
    text-align: right;
`;

export const MessageReceiver = styled(Message)`
    float: left;
    text-align: left;
`;

Message.name = Name;
Message.email = Email;
Message.text = Text;
Message.time = Time;