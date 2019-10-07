import styled from 'styled-components';

export const Button = styled.input.attrs(props => ({
    type: 'button',
}))`
    width: 50%;
    margin: 0 auto;
    position: relative;
    margin-top: 15px;
    border: none;
    padding: 10px;
    font-size: 20px;
    border-radius: 30px;
    background-color: ${props => props.theme.menu.buttonActive};
    color: ${props => props.theme.menu.textActive};  
`;

export const WrapperMenu = styled.div`
    background-color: #ffffff;
    width: 80%;
    position: absolute;
    z-index: 1050;
`;