import styled from 'styled-components';

export const Wrapper = styled.div.attrs(props => ({}))`
    min-height: 100%;
    padding: 10px;
    background-color: ${props => props.theme.mainHeader.backgroundColor};
    color: ${props => props.theme.mainHeader.colorText};
`;

export const InfoUser = styled.div``;

Wrapper.InfoUser = InfoUser;

export const spanTitle = styled.span``;

export const spanValue = styled.span``;

InfoUser.spanTitle = spanTitle;
InfoUser.spanValue = spanValue;