import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: #D2DADF;
    border: 1px solid #397A94;
`;

export const Users = styled.div`
    width: 99.9%;
    overflow: auto;
`;

export const Title = styled.div`
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
`;

Users.title = Title;

export const Info = styled.div.attrs(props => ({
    id: props.id ? props.id : '',
}))`
    flex: 1;
    text-align: center;
    color: #000000;
    padding: 10px;
    background-color: ${props => props.theme.usersList.backgroundColorTitle};
`;

Users.info = Info;

export const Card = styled.div.attrs(props => ({
    id: props.id,
}))`
    margin: 0 auto;
    height: 7%;
    display: flex;
    border-bottom:1px solid ${props => props.theme.usersList.border};
    cursor: pointer;
    padding: 5px;
    font-size: 14px;
`;

export const Online = styled(Card)`
    background-color:#54ff5c;
`;

Users.card = Card;
Users.online = Online;

export const Lonely = styled.div.attrs(props => ({
    key: props.key,
}))``;