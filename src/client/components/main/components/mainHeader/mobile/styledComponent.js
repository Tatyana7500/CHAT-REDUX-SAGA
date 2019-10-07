import styled from 'styled-components';

export const Wrapper = styled.div.attrs(props => ({}))`
    min-height: 100%;
    padding: 10px;
    background-color: ${props => props.theme.mainHeader.backgroundColor};
    color: ${props => props.theme.mainHeader.colorText};
`;

export const Info = styled.div``;

Wrapper.info = Info;

export const InfoItem = styled.div``;

Wrapper.infoItem = InfoItem;

export const SpanTitle = styled.span``;

export const SpanValue = styled.span``;