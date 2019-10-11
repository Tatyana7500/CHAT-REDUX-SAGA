import styled from 'styled-components';

export const Button = styled.div`
    border: 1px solid #000;
    width: 50%;
    margin: 10px auto;
    border-radius: 15px;
    background-color: ${props => props.theme.settings.button};
    color: ${props => props.theme.settings.buttonText};
    padding: 5px;
`;