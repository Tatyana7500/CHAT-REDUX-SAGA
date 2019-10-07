import ButtonSettings from './components/buttonSettings';
import ContentBlock from './components/contentBlock';
import MainHeader from './components/mainHeader';
import { HeaderSettings, Main } from './styledComponent';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

class MainPage extends React.Component {

    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    render() {
        const { theme } = this.props;

        return (
            <ThemeProvider theme={ theme }>
                <HeaderSettings>
                    <ButtonSettings />
                </HeaderSettings>
                <Main>
                    <MainHeader />
                    <ContentBlock />
                </Main>
            </ThemeProvider>
        );
    }
}

export default MainPage;