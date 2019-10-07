import styled from 'styled-components';

export const MainWindow = styled.div`
    display:flex;
    padding: 10px;
`;

export const Wrapper = styled.div`
    display:inline-block;
    position:relative;
    width:15%;
    top: 46px;
`;

MainWindow.wrapper = Wrapper;

export const NavMain = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;
    box-shadow: 0 0 2px ${props => props.theme.main.navShadow};
    height: 100px;
`;

export const Button = styled.button.attrs(props => ({
    id: props.id,
}))`
    position: relative;
    display: block;
    width: 100%;
    height: 50px;
    
    &:hover{
    cursor: pointer;
    background-color: ${props => props.theme.main.buttonHover};
    border: none;
    color: ${props => props.theme.main.textNotActive};
`;

export const User = styled(Button)`
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    display: block;
`;

export const Chat = styled(Button)`
    top: 30%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
`;
