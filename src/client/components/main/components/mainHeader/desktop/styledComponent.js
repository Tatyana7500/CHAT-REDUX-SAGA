import styled from 'styled-components';

export const Header = styled.div``;

export const Info = styled.div``;

Info.name = styled.div``;
Info.email = styled.div``;

Header.Info = Info;
Header.logOut = styled.button``;

// import { createGlobalStyle } from 'styled-components';
//
// export const GlobalStyles = createGlobalStyle`
//     * {
//         margin: 0px;
//         padding: 0px;
//         font-family: Arial, Helvetica, sans-serif;
//     }
// `;
//
// export const Header = styled.div`
//     background-color: ${props => props.theme.main.fieldButtons};
//     color: #000;
//     display:flex;
//     justify-content: space-between;
//     padding:10px;
// `;
//
// export const Info = styled.div``;
//
// Header.info = Info;
//
// export const InfoItem = styled.div``;
//
// Header.infoItem = InfoItem;
//
// export const SpanTitle = styled.span``;
//
// export const SpanValue = styled.span``;
//
// export const LogOut = styled.button.attrs(() => ({
//     id: 'logOut',
// }))`
//     border: 0;
//     background-color: ${props => props.theme.main.buttonHover};
//     color: #fff;
//     width: 10%;
//     text-transform: uppercase;
//     border-radius: 16px; display:inline-block;
//     cursor: pointer;
//     padding-top: 10px;
//     text-decoration: none;
//     text-align: center;
// `;