import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper, SpanTitle, SpanValue } from './styledComponent';

const MainHeader = (props) => {
    const { name, email, theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.info>
                    <Wrapper.infoItem>
                        <SpanTitle>name:</SpanTitle>
                        <SpanValue>{name}</SpanValue>
                    </Wrapper.infoItem>
                    <Wrapper.infoItem>
                        <SpanTitle>email:</SpanTitle>
                        <SpanValue>{email}</SpanValue>
                    </Wrapper.infoItem>
                </Wrapper.info>
            </Wrapper>
        </ThemeProvider>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};

export default MainHeader;