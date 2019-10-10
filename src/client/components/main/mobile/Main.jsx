import ButtonSettings from '../components/buttonSettings/mobile';
import ContentBlock from '../components/contentBlock/mobile';
import MainHeader from '../components/mainHeader/mobile';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Header, Main, Logo } from './styledComponent';

class MainPage extends React.Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    render() {
        const { theme } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Header>
                    <Logo />
                    <ButtonSettings />
                </Header>
                <Main>
                    <MainHeader />
                    <ContentBlock />
                </Main>
            </ThemeProvider>
        )
    }
}

export default MainPage;