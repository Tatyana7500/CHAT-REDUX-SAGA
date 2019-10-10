import styled from 'styled-components';

export const ModalWrapper = styled.div.attrs(props => ({}))`
    z-index: 1002;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 250px;
    width: 240px;
    height: 270px;
    position: absolute;
    box-shadow: 0 0 5px #000;
    background-color: ${props => props.theme.modalContainer.backgroundModal};
`;