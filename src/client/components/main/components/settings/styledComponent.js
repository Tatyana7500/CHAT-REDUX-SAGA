import styled from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    border:none;
`;

export const Close = styled(Button)`
    margin: 10px;
    position: relative;
`;

export const Img = styled.img.attrs(() => ({
    src: 'src/client/assets/icons/close.png',
    width: '20',
    height: '20',
}))``;

export const ModalSettings = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const Item = styled.div``;

ModalSettings.item = Item;

export const P = styled.p``;

ModalSettings.p = P;