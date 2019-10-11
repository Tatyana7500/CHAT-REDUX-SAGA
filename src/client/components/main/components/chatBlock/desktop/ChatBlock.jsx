import HatCloud from '../../chatCloud/desktop';
import Emoji from '../../emoji/desktop';
import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper, Footer } from './styledComponent';

const ChatBlock = props => {
    const {
        emoji,
        clickButtonSend,
        messageAreaValue,
        updateMessageValue,
    } = props;

    return (
        <Wrapper>
            <Wrapper.Messages>
                <HatCloud />
            </Wrapper.Messages>
            <Wrapper.Footer>
                <Footer.textMessage
                    value={messageAreaValue}
                    onChange={updateMessageValue}
                />
                <Footer.send
                    onClick={clickButtonSend}
                    children ={'send'}/>
                { emoji === true && <Emoji /> }
            </Wrapper.Footer>
        </Wrapper>
    );
};

ChatBlock.propTypes = {
    emoji: PropTypes.bool.isRequired,
    clickButtonSend: PropTypes.func.isRequired,
    messageAreaValue: PropTypes.string.isRequired,
    updateMessageValue: PropTypes.func.isRequired,
};

export default ChatBlock;