import ButtonSettings from '../components/buttonSettings/desktop';
import ContentBlock from '../components/contentBlock/desktop';
import MainHeader from '../components/mainHeader/desktop';
import { Wrapper } from './styledComponent';
import React from 'react';

class MainPage extends React.Component {
    render() {
        return (
            <Wrapper>
                <Wrapper.settings>
                    <ButtonSettings />
                </Wrapper.settings>
                <Wrapper.main>
                    <MainHeader />
                    <ContentBlock />
                </Wrapper.main>
            </Wrapper>
        );
    }
}

export default MainPage;