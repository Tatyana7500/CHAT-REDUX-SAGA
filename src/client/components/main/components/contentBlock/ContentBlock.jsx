import UsersList from '../usersList/';
import ChatBlock from '../chatBlock/';
import constants from '../../../../../constants';
import PropTypes from 'prop-types';
import './ContentBlock.css';
import React from 'react';

const ContentBlock = props => {
    // const {
    //     name,
    //     emoji,
    //     usersOnline,
    //     messages,
    //     addEmoji,
    //     clickChat,
    //     usersList,
    //     closeMenu,
    //     userState,
    //     translate,
    //     clickUsers,
    //     emojiMenu,
    //     showEmoji,
    //     windowState,
    //     privateChat,
    //     clickButtonSend,
    //     messageAreaValue,
    //     updateMessageValue,
    //     openPrivateChat,
    // } = props;

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
                    </button>
                    <button
                        onClick={getChat}
                        className='buttons-main__btn buttons-main__btn_chat'
                        id='getChat'>
                        Chat
                    </button>
                </div>
            </div>

            {windowState === constants.USERS && <UsersList />}
            {windowState === constants.CHAT && <ChatBlock/>}
            
        </div>
    );
};

ContentBlock.propTypes = {
    getUsers: PropTypes.func.isRequired,
    getChat: PropTypes.func.isRequired,
    windowState: PropTypes.string.isRequired,
};

export default ContentBlock;