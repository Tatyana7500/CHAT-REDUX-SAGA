import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const ErrorWindow = (props) => {
    const {
        modalContent,
        hideModal,
    } = props;

    return (
        <Fragment>
            <button className='settings close' onClick={hideModal}>
                <img src='src/client/assets/icons/close.png' width='20' height='20' />
            </button>
            <div className='error'>
                <h3>{modalContent}</h3>
            </div>
        </Fragment>
    );
};

ErrorWindow.protoTypes = {
    modalContent: PropTypes.string.isRequired,
    hideModal: PropTypes.func.isRequired,
};

export default ErrorWindow;