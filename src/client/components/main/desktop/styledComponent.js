import styled from 'styled-components';

export const Wrapper = styled.div`
   position: relative;
   width: 90vw;
   height: 95vh ;
   margin: 20px auto;
   background-color: ${props => props.theme.main.backgroundWrapper};
   border-radius: 10px;
   display:flex;
   flex-direction: column;
`;

const Header = styled.div`
   height: 15%;
`;

const Content = styled.div`
    width: 96%;
    align-self: center;
    background-color: #fff;
    border-radius: 10px;
    height:80%;
`;

export const Root = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-image: ${props => props.theme.main.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

Wrapper.Header = Header;
Wrapper.Content = Content;

Root.Wrapper = Wrapper;