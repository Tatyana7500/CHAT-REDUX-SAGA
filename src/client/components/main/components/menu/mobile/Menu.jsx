import PropTypes from 'prop-types';
import React from 'react';
import Modal from "../../../../../libs/modal/desktop/Modal";
import { Button, WrapperMenu } from './styledComponent';
import { ThemeProvider } from 'styled-components';

const Menu = props => {
    const { getUsers, getChat, leaveAccount, settings, theme, isOpenMenu } = props;

    return (
        isOpenMenu ? (
            <Modal>
                <ThemeProvider theme={theme}>
                    <WrapperMenu>
                        <Button onClick={getUsers}>USERS</Button>
                        <Button onClick={getChat}>CHAT</Button>
                        <Button onClick={leaveAccount}>SETTINGS</Button>
                        <Button onClick={settings}>LOG OUT</Button>
                    </WrapperMenu>
                </ThemeProvider>
            </Modal>
        ): null
    );
};

Menu.propTypes = {
    isOpenMenu: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    getChat: PropTypes.func.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    settings: PropTypes.func.isRequired,
};

export default Menu;