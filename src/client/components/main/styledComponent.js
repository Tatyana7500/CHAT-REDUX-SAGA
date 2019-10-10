import styled from 'styled-components';

//export const HeaderSettings = styled.div``;

export const Wrapper = styled.div`
   position: relative;
   width: 90vw;
   height: 95vh ;
   margin: 0 auto;
   background-color: #D4493E;
   border-radius: 30px;
   display:flex;
   flex-direction: column;
`;

const Header = styled.div`
   height: 15%;
`;

const Content = styled.div`
    width: 96%;
    align-self:center;
    background-color:#fff;
    border-radius:30px;
    // flex: 1;
    height:80%;
`;

export const Window = styled.div`
position:absolute;

width:100%;
height:100%;
background-color: #FDDD83;
`;


Wrapper.Header = Header;
Wrapper.Content = Content;