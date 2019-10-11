import { Wrapper, Message } from './styledComponent';
import PropTypes from 'prop-types';
import logic from '../desktop/logic';
import React from 'react';

const ChatCloud = props => {
    const { messages, name} = props;

    return (
        <Wrapper>
            {   messages.map((item, index) => {
                const float = item.name === name;
                const date = logic.parseDate(item.date);

                return (
                    <Wrapper.Message key={index} float = {float}>
                        <Message.name> {item.name} </Message.name>
                        <Message.email>{item.email}</Message.email>
                        <Message.text>{item.message}</Message.text>
                        <Message.time>{date}</Message.time>
                    </Wrapper.Message>
                );
                })
            }
        </Wrapper>
    );
};

ChatCloud.propTypes = {
    name: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
};

export default ChatCloud;