import PropTypes from 'prop-types';
import React from 'react';
import { Input } from './styledComponent';

const SettingPrivateChat = props => {
    const { changeActivePrivateChat, privateChat } = props;
    const isChecked = privateChat === true;

    return (
        <Input type='checkbox' onChange={changeActivePrivateChat} checked={isChecked}/>
    );
};

SettingPrivateChat.propTypes = {
    changeActivePrivateChat: PropTypes.func.isRequired,
    privateChat: PropTypes.bool.isRequired,
};

export default SettingPrivateChat;