import constants from '../../../../../../constants';
import UsersList from '../../usersList/desktop';
import ChatBlock from '../../chatBlock/desktop';
import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper } from './styledComponent';

const ContentBlock = props => {
    const { windowState } = props;


    return (
        <Wrapper>
            {windowState === constants.USERS && <UsersList />}
            {windowState === constants.CHAT && <ChatBlock/>}
        </Wrapper>
    );
};

ContentBlock.propTypes = {
    windowState: PropTypes.string.isRequired,
};

export default ContentBlock;