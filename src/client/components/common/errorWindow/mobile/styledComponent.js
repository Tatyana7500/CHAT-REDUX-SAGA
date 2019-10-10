import styled from 'styled-components';

export const ErrorText = styled.div.attrs(props => ({}))`
    color: ${props => props.theme.errorWindow.colorText};  
    text-align: center;
    margin-top: 60px;
    display: block;
`;

export const Button = styled.a.attrs(props => ({}))`
    border: none;
    text-align: center;
`;

export const Close = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/close.png',
    width: '30px',
    height: '30px'
}))``;