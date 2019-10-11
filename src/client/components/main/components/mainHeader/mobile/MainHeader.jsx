import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper, InfoUser } from './styledComponent';

const MainHeader = (props) => {
    const { name, email, t } = props;

    return (
        <Wrapper>
            <Wrapper.InfoUser>
                <InfoUser.spanTitle>name:</InfoUser.spanTitle>
                <InfoUser.spanValue>{name}</InfoUser.spanValue>
            </Wrapper.InfoUser>
            <Wrapper.InfoUser>
                <InfoUser.spanTitle>email:</InfoUser.spanTitle>
                <InfoUser.spanValue>{email}</InfoUser.spanValue>
            </Wrapper.InfoUser>
        </Wrapper>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default MainHeader;