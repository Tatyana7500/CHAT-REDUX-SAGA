import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './styledComponent';

const SettingDefault = props => {
    const { setDefaultSettings } = props;

    return (
        <Button onClick={setDefaultSettings}>yes</Button>
    );
};

SettingDefault.propTypes = {
    setDefaultSettings: PropTypes.func.isRequired,
};

export default SettingDefault;