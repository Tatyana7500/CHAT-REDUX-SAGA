import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;
export const Message = styled.div`
width:30%;
border: 1px solid red;
${props => props.float ?`align-self: flex-end;` : 'align-self: flex-start;' }
`;

const name = styled.p``;
const email = styled.p``;
const text = styled.span``;
const time = styled.p``;

Wrapper.Message = Message;
Message.name = name;
Message.email = email;
Message.text = text;
Message.time = time;