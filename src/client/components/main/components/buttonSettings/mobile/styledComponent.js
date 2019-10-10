import styled from 'styled-components';

export const Burger = styled.img.attrs(props => ({
    src: 'src/client/assets/icons/burger.png',
    width: '30px',
    height: '30px'
}))`
    display: block;
`;