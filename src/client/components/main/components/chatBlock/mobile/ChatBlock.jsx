import { Content, Footer, Send } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import HatCloud from '../../chatCloud/mobile';
import PropTypes from 'prop-types';
import Emoji from '../../emoji/desktop';
import React from 'react';

const ChatBlock = props => {
    const {
        emoji,
        theme,
        clickButtonSend,
        messageAreaValue,
        updateMessageValue,
    } = props;

    return (
        <ThemeProvider theme={theme}>
            <Content>
                <HatCloud />
                <Footer>
                    <Footer.textField onChange={updateMessageValue} value={messageAreaValue}>
                    </Footer.textField>
                    <Send>
                        { emoji === true && <Emoji /> }
                        <Footer.send onClick={clickButtonSend}>
                            send
                        </Footer.send>
                    </Send>
                </Footer>
            </Content>
        </ThemeProvider>
    );
};

ChatBlock.propTypes = {
    emoji: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
    clickButtonSend: PropTypes.func.isRequired,
    messageAreaValue: PropTypes.string.isRequired,
    updateMessageValue: PropTypes.func.isRequired,
};

export default ChatBlock;