import constants from '../../../../../constants';
import { Input } from './styledComponent';
import PropTypes from 'prop-types';
import React from 'react';

const SettingTheme = (props) => {
    const { changeTheme, theme } = props;
       const isChecked = theme === constants.LIGHT;

    return (
        <Input className='radio' type='checkbox' onChange={changeTheme} checked={isChecked}/>
    );
};

SettingTheme.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
};

export default SettingTheme;