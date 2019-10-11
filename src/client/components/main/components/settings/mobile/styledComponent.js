import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: ${props => props.theme.settings.backgroundColor};
`;

export const Button = styled.button`
    background-color: transparent;
    border:none;
`;

export const Close = styled(Button)`
    margin: 10px;
    position: absolute;
    top: 0;
`;

Wrapper.Close = Close;

export const img = styled.img.attrs(() => ({
    src: 'src/client/assets/icons/close.png',
    width: '20',
    height: '20',
}))``;

Close.image = img;

export const SettingsMobile = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

Wrapper.SettingsMobile = SettingsMobile;

export const Item = styled.div`
    text-align: center;
        margin: 20px;
`;

SettingsMobile.Item = Item;

export const P = styled.p`
    color: ${props => props.theme.settings.color};
`;

Item.p = P;