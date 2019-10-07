import constants from '../../../../../constants';
import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox } from './styledComponent';

const SettingTheme = (props) => {
    const { changeTheme, theme } = props;
    const isChecked = theme === constants.LIGHT;

    return (
        <Checkbox onChange={changeTheme} checked={isChecked}/>
    );
};

SettingTheme.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
};

export default SettingTheme;