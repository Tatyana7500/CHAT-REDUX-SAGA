import Modal from "../../../../../libs/modal/desktop/Modal";
import { Button, WrapperMenu } from './styledComponent';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = props => {
    const { getUsers, getChat, leaveAccount, settings, isOpenMenu } = props;

    return (
        isOpenMenu ? (
            <Modal>
                <WrapperMenu>
                    <Button onClick={getUsers}>USERS</Button>
                    <Button onClick={getChat}>CHAT</Button>
                    <Button onClick={leaveAccount}>SETTINGS</Button>
                    <Button onClick={settings}>LOG OUT</Button>
                </WrapperMenu>
            </Modal>
        ): null
    );
};

Menu.propTypes = {
    isOpenMenu: PropTypes.string.isRequired,
    getUsers: PropTypes.func.isRequired,
    getChat: PropTypes.func.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    settings: PropTypes.func.isRequired,
};

export default Menu;