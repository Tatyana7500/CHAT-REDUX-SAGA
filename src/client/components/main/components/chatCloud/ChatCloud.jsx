import PropTypes from 'prop-types';
import logic from './logic';
import React from 'react';
import './ChatCloud.css';

const ChatCloud = props => {
    const { messages, name } = props;

    return (
        <div className='massageField' id='massageField'>
            {
                messages.map((item, index) => {
                    const float = item.name === name ? 'massage messageSender' : 'massage messageReceiver';
                    const date = logic.parseDate(item.date);

                    return (
                        <div className={ float } key={index}>
                            <p className='massage__name'>{item.name}</p>
                            <p className='massage__email'>{item.email}</p>
                            <span className='massage__text'>{item.message}</span>
                            <p className='massage__time'>{date}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

ChatCloud.propTypes = {
    name: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
};

export default ChatCloud;