import PropTypes from 'prop-types';
import React from 'react';
import { Burger } from './styledComponent';

const ButtonSettings = (props) => {
    const { openModal } = props;

    return (
        <Burger onSelect={openModal} />
    );
};

ButtonSettings.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default ButtonSettings;