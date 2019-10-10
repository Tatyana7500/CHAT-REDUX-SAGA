import PropTypes from 'prop-types';
import React from 'react';
import { Input } from './styledComponent';

const SettingEmoji = props => {
    const { changeActiveEmoji, emoji } = props;
    const isChecked = emoji === true;

    return (
        <Input type='checkbox' onChange={changeActiveEmoji} checked={isChecked}/>
    );
};

SettingEmoji.propTypes = {
    changeActiveEmoji: PropTypes.func.isRequired,
    emoji: PropTypes.bool.isRequired,
};

export default SettingEmoji;