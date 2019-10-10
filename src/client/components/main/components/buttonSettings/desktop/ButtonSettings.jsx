import PropTypes from 'prop-types';
import React from 'react';
import img from '../../../../../assets/icons/settings.png'
import { Wrapper } from './styledComponent';

const ButtonSettings = (props) => {
    const { openModal } = props;

    return (
        <Wrapper>
            <Wrapper.setting src={img} onClick = {openModal}/>
        </Wrapper>
    );
};

ButtonSettings.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default ButtonSettings;