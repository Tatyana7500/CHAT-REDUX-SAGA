import styled from 'styled-components';

export const Content = styled.div`
    width: 68%;
    position: relative;
    margin:0 auto;
    display: inline-block;
    background-color: #D2DADF;
    border: 1px solid #397A94;
    top: 46px;
    height: 600px;
    min-width: 600px;
`;

export const Users = styled.div`
    width: 99.9%;
    height: 600px;
    overflow: auto;
`;

export const Title = styled.div`
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
    background-color: ${props => props.theme.main.headerUser};
`;

Users.title = Title;

export const Info = styled.div.attrs(props => ({
    id: props.id ? props.id : '',
}))`
    flex: 1;
    text-align: center;
    color: #000000;
    padding: 10px;
`;

Users.info = Info;

export const Card = styled.div.attrs(props => ({
    key: props.key,
    id: props.id,
}))`
    margin: 0 auto;
    height: 7%;
    display: flex;
    font-size: 25px;
    border-bottom:1px solid ${props => props.theme.main.border};
    cursor: pointer;
    padding: 5px;
`;

export const Online = styled(Card)`
    background-color:#54ff5c;
`;

Users.card = Card;
Users.online = Online;

export const Lonely = styled.div.attrs(props => ({
    key: props.key,
}))``;