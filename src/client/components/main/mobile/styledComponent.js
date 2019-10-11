import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

export const Main = styled.div`
    background-color: #ffffff;
    width: 100%;
    color: #000;
    position: absolute;
`;

Wrapper.Main = Main;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props => props.theme.main.backgroundColor};
    flex:1;
`;

Wrapper.Header = Header;

Header.logo = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/logo.png',
    width: '150px',
    height: '50px'
}))`
    display: block;
`;