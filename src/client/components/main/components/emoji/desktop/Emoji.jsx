import { Picker } from 'emoji-mart';
import PropTypes from 'prop-types';
import React from 'react';
import { EmojiDiv, EmojiPicker, P } from './styledComponent';

const Emoji = props => {
    const {
        addEmoji,
        emojiMenu,
        showEmoji,
    } = props;

    return (
        <EmojiDiv>
            {emojiMenu ?
                <EmojiPicker>
                    <Picker
                        title='weChat'
                        onSelect={addEmoji}
                        emojiTooltip={true}
                    />
                </EmojiPicker>
                :
                <P onClick={showEmoji}>{String.fromCodePoint(0x1f60a)}</P>
            }
        </EmojiDiv>
    );
};

Emoji.propTypes = {
    addEmoji: PropTypes.func.isRequired,
    emojiMenu: PropTypes.bool.isRequired,
    showEmoji: PropTypes.func.isRequired,
};

export default Emoji;