import PropTypes from 'prop-types';
import logic from './logic';
import React from 'react';
import { Message, Wrapper } from './styledComponent';

const ChatCloud = props => {
    const { messages, name } = props;

    return (
        <Wrapper>
            {   messages.map((item, index) => {
                    const float = item.name === name;
                    const date = logic.parseDate(item.date);

                    return (
                        <Wrapper.Message key = {index} float = {float}>
                            <Message.name children = {item.name} />
                            <Message.email children = {item.email} />
                            <Message.text children = {item.message} />
                            <Message.time children = {date} />
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