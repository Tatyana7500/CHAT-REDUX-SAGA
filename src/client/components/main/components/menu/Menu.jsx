import { WrapperMenu, Close } from './styledComponent';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = props => {
    const { getUsers, getChat, leaveAccount, settings, hideModal } = props;

    return  (
        <WrapperMenu>
            <WrapperMenu.ButtonClose onClick={hideModal}>
                <Close/>
            </WrapperMenu.ButtonClose>
            <WrapperMenu.Button onClick={getUsers}>USERS</WrapperMenu.Button>
            <WrapperMenu.Button onClick={getChat}>CHAT</WrapperMenu.Button>
            <WrapperMenu.Button onClick={settings}>SETTINGS</WrapperMenu.Button>
            <WrapperMenu.Button onClick={leaveAccount}>LOG OUT</WrapperMenu.Button>
        </WrapperMenu>
    );
};

Menu.propTypes = {
    hideModal: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    getChat: PropTypes.func.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    settings: PropTypes.func.isRequired,
};

export default Menu;