import { MessageField, MessageSender, MessageReceiver, Message } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import logic from '../desktop/logic';
import React from 'react';

const ChatCloud = props => {
    const { messages, name, theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <MessageField>
                {
                    messages.map((item, index) => {
                        const date = logic.parseDate(item.date);
                        if (item.name === name) {
                            return (
                                <MessageSender key={index}>
                                    <Message.name> {item.name} </Message.name>
                                    <Message.email>{item.email}</Message.email>
                                    <Message.text>{item.message}</Message.text>
                                    <Message.time>{date}</Message.time>
                                </MessageSender>
                            );
                        } else {
                            return (
                                <MessageReceiver key={index}>
                                    <Message.name> {item.name} </Message.name>
                                    <Message.email>{item.email}</Message.email>
                                    <Message.text>{item.message}</Message.text>
                                    <Message.time>{date}</Message.time>
                                </MessageReceiver>
                            );
                        }
                    })
                }
            </MessageField>
            {/*<div className='massageField' id='massageField'>*/}
            {/*    {*/}
            {/*        messages.map((item, index) => {*/}
            {/*            const float = item.name === name ? 'massage messageSender' : 'massage messageReceiver';*/}
            {/*            const date = logic.parseDate(item.date);*/}

            {/*            return (*/}
            {/*                <div className={ float } key={index}>*/}
            {/*                    <p className='massage__name'>{item.name}</p>*/}
            {/*                    <p className='massage__email'>{item.email}</p>*/}
            {/*                    <span className='massage__text'>{item.message}</span>*/}
            {/*                    <p className='massage__time'>{date}</p>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </ThemeProvider>
    );
};

ChatCloud.propTypes = {
    name: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
};

export default ChatCloud;