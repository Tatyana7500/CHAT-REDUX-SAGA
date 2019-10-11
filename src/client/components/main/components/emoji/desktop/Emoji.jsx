import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Emoji extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        addEmoji: PropTypes.func.isRequired,
        emojiMenu: PropTypes.bool.isRequired,
        showEmoji: PropTypes.func.isRequired,
        hideEmoji: PropTypes.func.isRequired,
    };

    onEmojiClick = () => {
        const {
            showEmoji,
        } = this.props;

        showEmoji();

        document.addEventListener('click', this.onEmojiClose);
    };

    onEmojiClose = () => {
        const {
            hideEmoji,
        } = this.props;

        hideEmoji();

        document.removeEventListener('click', this.onEmojiClose);
    };

    render() {
        const {
            addEmoji,
            emojiMenu,
        } = this.props;

        return (
            <div>
                {emojiMenu ?
                    <span className='emojiPicker'>
                                <Picker
                                    title='weChat'
                                    onSelect={addEmoji}
                                    emojiTooltip={true}
                                />
                            </span>
                    :
                    <p
                        onClick={this.onEmojiClick}
                        className='getEmojiButton' >
                        {String.fromCodePoint(0x1f60a)}
                    </p>
                }
            </div>
        );
    }
}

export default Emoji;