import constants from '../../../../../constants';
import UsersList from '../usersList/';
import ChatBlock from '../chatBlock/';
import PropTypes from 'prop-types';
import React from 'react';

const ContentBlock = props => {
    const { getUsers, getChat, windowState  } = props;

    return (
        <div className='mainWindow'>
            <div className='wrapper mainWindow__wrapper'>
                <div className='nav-main'>
                    <button
                        onClick = { getUsers }
                        className='buttons-main__btn buttons-main__btn_user'
                        id='getUsers'>
                        users
                        {/*{translate('users')}*/}
                    </button>
                    <button
                        onClick={getChat}
                        className='buttons-main__btn buttons-main__btn_chat'
                        id='getChat'>
                        chat
                        {/*{translate('chat')}*/}
                    </button>
                </div>
            </div>

            {windowState === constants.USERS && <UsersList />}
            {windowState === constants.CHAT && <ChatBlock/>}
        </div>
    );
};

ContentBlock.propTypes = {
    getChat: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    windowState: PropTypes.string.isRequired,
};

export default ContentBlock;