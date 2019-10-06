import HatCloud from '../chatCloud/';
import Emoji from '../emoji/';
import PropTypes from 'prop-types';
import React from 'react';

const ChatBlock = props => {
    const {
        emoji,
        translate,
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
                    placeholder='yourMessage'
                    //placeholder={translate('yourMessage')}>
                 >
                 </textarea>
                { emoji === true && <Emoji /> }
                <button
                    onClick={clickButtonSend}
                    className='btn btn-main footer__send'>send
                </button>
            </div>
        </div>
    );
};

ChatBlock.propTypes = {
    emoji: PropTypes.bool.isRequired,
    // translate: PropTypes.func.isRequired,
    clickButtonSend: PropTypes.func.isRequired,
    messageAreaValue: PropTypes.string.isRequired,
    updateMessageValue: PropTypes.func.isRequired,
};

export default ChatBlock;