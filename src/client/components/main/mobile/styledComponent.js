import styled from 'styled-components';

export const Main = styled.div.attrs(props => ({}))`
    background-color: #ffffff;
    width: 100%;
    color: #000;
    position: absolute;
`;

export const Header = styled.div.attrs(props => ({
}))`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props => props.theme.main.backgroundColor};
    flex:1;
`;

export const Logo = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/logo.png',
    width: '150px',
    height: '50px'
}))`
    display: block;
`;