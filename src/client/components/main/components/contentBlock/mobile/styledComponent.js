import styled from 'styled-components';

export const MainWindow = styled.div.attrs(props => ({}))`
    background-color: ${props => props.theme.contentBlock.backgroundColor};
    color: ${props => props.theme.contentBlock.colorText};
    border-top:  ${props => props.theme.contentBlock.border};
    overflow: auto;
`;