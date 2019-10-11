import styled from 'styled-components';

export const WrapperMenu = styled.div`
    width: 80%;
    position: absolute;
    z-index: 1050;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100%;
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

export const ButtonClose = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 15px;
`;

WrapperMenu.Button = Button;
WrapperMenu.ButtonClose = ButtonClose;

export const Close = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/close.png',
    width: '30px',
    height: '30px'
}))``;