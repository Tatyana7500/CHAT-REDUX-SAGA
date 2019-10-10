import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    overflow: auto;
`;

const Users = styled.div`
      width:100%;
      display:flex;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.8);
      color: #000;
`;

export const User = styled.div`
    font-size:2vw;
    text-align:center;
    display:flex;
    width:100%;
    color: #777;
    cursor:pointer;
    ${props => props.isOnline ? ' background-color: #EFBF62' : `background-color:inherit`};
    ${props => props.isOnline ? ' color: #D4493E' : `color:inherit`};
    border-bottom:1px solid #D4493E;
    
    &:hover {
        background-color: rgba(235, 193, 13, 0.1);
    }
            
    justify-content: space-evenly;
            @media (max-width: 1500px) {
            font-size:3vw;
          }
           @media (max-width: 700px) {
            font-size:5vw;
          }
`;

const name = styled(User)``;
const email = styled(User)``;

User.email = email;
User.name = name;
Wrapper.Users = Users;