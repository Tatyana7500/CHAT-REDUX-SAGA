import PropTypes from 'prop-types';
import React from 'react';
import { Header, SpanTitle, SpanValue, LogOut, GlobalStyles } from './styledComponent';

const MainHeader = props => {
    const { leaveAccount, name, email } = props;

    return (
        //<GlobalStyles>
            <Header>
                <Header.info>
                    <Header.infoItem>
                        <SpanTitle>name:</SpanTitle>
                        <SpanValue>{name}</SpanValue>
                    </Header.infoItem>
                    <Header.infoItem>
                        <SpanTitle>email:</SpanTitle>
                        <SpanValue>{email}</SpanValue>
                    </Header.infoItem>
                </Header.info>
                <LogOut onClick={leaveAccount}>logOut</LogOut>
            </Header>
        //</GlobalStyles>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    // translate: PropTypes.func.isRequired,
};

export default MainHeader;