import PropTypes from 'prop-types';
import React from 'react';
import { Header, Info } from './styledComponent';

const MainHeader = props => {
    const { leaveAccount, name, email } = props;

    return (
        <Header>
            <Header.Info>
                <Info.name>
                    name: {name}
                </Info.name>
                <Info.email>
                    email: {email}
                </Info.email>
            </Header.Info>
            <Header.logOut onClick={leaveAccount} children='logOut' />
        </Header>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    // translate: PropTypes.func.isRequired,
};

export default MainHeader;