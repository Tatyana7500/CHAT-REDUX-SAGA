import constants from '../../../../../constants';
import UsersList from '../usersList/';
import ChatBlock from '../chatBlock/';
import PropTypes from 'prop-types';
import React from 'react';
import { MainWindow, NavMain, User, Chat } from './styledComponent';

const ContentBlock = props => {
    const { getUsers, getChat, windowState } = props;

    return (
        <MainWindow>
            <MainWindow.wrapper>
                <NavMain>
                    <User onClick = { getUsers } id='getUsers'>
                        users
                    </User>
                    <Chat onClick={getChat} id='getChat'>
                        chat
                    </Chat>
                </NavMain>
            </MainWindow.wrapper>

            {windowState === constants.USERS && <UsersList />}
            {windowState === constants.CHAT && <ChatBlock/>}
        </MainWindow>
    );
};

ContentBlock.propTypes = {
    getChat: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    windowState: PropTypes.string.isRequired,
};

export default ContentBlock;