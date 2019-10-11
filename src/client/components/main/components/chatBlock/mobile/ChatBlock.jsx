import { Wrapper, Footer } from './styledComponent';
import HatCloud from '../../chatCloud/mobile';
import PropTypes from 'prop-types';
import Emoji from '../../emoji/desktop';
import React from 'react';

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
                    id='textMassage'
                    onChange={updateMessageValue}
                    value={messageAreaValue} />
                    <Footer.Send>
                        { emoji === true && <Emoji /> }
                        <Footer.send
                            onClick={clickButtonSend}
                            children ={'send'}/>
                    </Footer.Send>
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