import HatCloud from '../../chatCloud/desktop';
import Emoji from '../../emoji/desktop';
import PropTypes from 'prop-types';
import React from 'react';

const ChatBlock = props => {
    const {
        emoji,
        clickButtonSend,
        messageAreaValue,
        updateMessageValue,
    } = props;

    return (
        <div className='content'>
                <HatCloud />
            <div className='footer'>
                <textarea
                    id='textMassage'
                    className='textMassage'
                    value={messageAreaValue}
                    onChange={updateMessageValue}
                    placeholder='Your Message'
                 >
                 </textarea>
                { emoji === true && <Emoji /> }
                <button
                    onClick={clickButtonSend}
                    className='btn btn-main footer__send'>Send
                </button>
            </div>
        </div>
    );
};

ChatBlock.propTypes = {
    emoji: PropTypes.bool.isRequired,
    clickButtonSend: PropTypes.func.isRequired,
    messageAreaValue: PropTypes.string.isRequired,
    updateMessageValue: PropTypes.func.isRequired,
};

export default ChatBlock;