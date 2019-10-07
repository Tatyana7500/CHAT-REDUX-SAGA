import styled from 'styled-components';

export const HeaderSettings = styled.div``;

export const Main = styled.div`
    background-color: ${props => props.theme.main.body};
    margin: 15px auto;
    width: 80%;
    height: 90%;
    border: ${props => props.theme.main.border};
    box-shadow: 0 0 5px ${props => props.theme.main.shadow};
    min-height: 735px;
`;