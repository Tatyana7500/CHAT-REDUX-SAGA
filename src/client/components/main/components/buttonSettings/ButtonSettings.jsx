import PropTypes from 'prop-types';
import React from 'react';

const ButtonSettings = (props) => {
    const { openModal } = props;

    return (
        <button className='settings' onClick={openModal}>
            <img src='src/client/assets/icons/settings.png' width='50' height='50'/>
        </button>
    );
};

ButtonSettings.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default ButtonSettings;