import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: ${props => props.theme.usersList.backgroundColor};
    border: 1px solid #397A94;
`;

export const Users = styled.div`
    width: 99.9%;
    overflow: auto;
    margin-top: -2px;
`;

Wrapper.Users = Users;

export const Title = styled.div`
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
`;

Users.Title = Title;

export const Info = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.theme.usersList.colorText};
    padding: 10px;
    background-color: ${props => props.theme.usersList.backgroundColorTitle};
`;

Title.span = Info;

export const User = styled.div`
    height: 7%;
    display: flex;
    ${props => props.isOnline ? ' background-color: #EFBF62' : `background-color:inherit`};
    ${props => props.isOnline ? ' color: #D4493E' : `color:inherit`};
    padding: 5px;
    font-size: 14px;
    border: 1px solid ${props => props.theme.usersList.border};
    margin: 5px;
    justify-content: space-between;
`;

Users.User = User;

const name = styled(User)`
    border:none;
`;
const email = styled(User)`
    border: none;
`;

User.email = email;
User.name = name;

export const Lonely = styled.div.attrs(props => ({
    key: props.key,
}))``;

Users.Lonely = Lonely;