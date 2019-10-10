import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, ErrorText, Close } from './styledComponent';

const ErrorWindow = (props) => {
    const {
        theme,
        modalContent,
        hideModal,
    } = props;

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Button onClick={hideModal}>
                    <Close/>
                </Button>
                <ErrorText>
                    {modalContent}
                </ErrorText>
            </Fragment>
        </ThemeProvider>
    );
};

ErrorWindow.protoTypes = {
    modalContent: PropTypes.string.isRequired,
    hideModal: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

export default ErrorWindow;