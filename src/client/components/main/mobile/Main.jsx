import ButtonSettings from '../components/buttonSettings/mobile';
import ContentBlock from '../components/contentBlock/mobile';
import MainHeader from '../components/mainHeader/mobile';
import { Wrapper, Header } from './styledComponent';
import React from 'react';

class MainPage extends React.Component {
    render() {
        return (
            <Wrapper>
                <Wrapper.Header>
                    <Header.logo />
                    <ButtonSettings />
                </Wrapper.Header>
                <Wrapper.Main>
                    <MainHeader />
                    <ContentBlock />
                </Wrapper.Main>
            </Wrapper>
        )
    }
}

export default MainPage;