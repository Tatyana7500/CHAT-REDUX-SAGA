import styled from 'styled-components';

export const Wrapper = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
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
    background-color: ${props => props.theme.chatCloud.messageBackground};
    color:#fff;
    ${props => props.float ?`align-self: flex-end;` : 'align-self: flex-start;' };
    
    &:before {
        content: '';
        position: absolute;
        width:20px;
        height:20px;
        border-left-color: transparent;
        border-top-color: transparent;
        background-color: inherit;
        top:70%;
    };
    
   ${props => props.float ? `:before { right:-10px; transform:rotate(-45deg)}`: `:before { left:-10px; transform:rotate(135deg)}`}
`;

const name = styled.p`
    color: #EFBF62;
    position:relative;
`;

const email = styled.p`
    color: #EFBF62;
    position:relative;
`;

const text = styled.span`
    font-size:20px;
    position:relative;
`;

const time = styled.p`
    position:relative;
`;

Wrapper.Message = Message;
Message.name = name;
Message.email = email;
Message.text = text;
Message.time = time;