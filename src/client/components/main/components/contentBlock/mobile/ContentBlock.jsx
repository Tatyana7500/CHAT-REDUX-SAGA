import constants from '../../../../../../constants';
import UsersList from '../../usersList/mobile';
import ChatBlock from '../../chatBlock/mobile';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainWindow } from './styledComponent';

const ContentBlock = props => {
    const { windowState, theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <MainWindow>
                {windowState === constants.USERS && <UsersList />}
                {windowState === constants.CHAT && <ChatBlock/>}
            </MainWindow>
        </ThemeProvider>
    );
};

ContentBlock.propTypes = {
    windowState: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};

export default ContentBlock;