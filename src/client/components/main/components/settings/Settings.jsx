import './Settings.css';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import SettingEmoji from './components/emojiCheckbox/EmojisCheckbox.jsx';
import SettingTheme from '../../../common/themeDropdown';
import SettingDefault from './components/defaultSettings';
import SettingLanguage from '../../../common/languageDropdown';
import SettingPrivateChat from './components/privateChatCheckbox/PrivateCheckbox.jsx';

const Settings = (props) => {
    const {
        hideModal,
    } = props;

    return (
        <Fragment>
                <button className='settings close' onClick={hideModal}>
                    <img src='src/client/assets/icons/close.png' width='20' height='20' />
                </button>
                <div className='modal__settings'>
                    <div className='modal__settings-theme'>
                        {/*<p>{translate('theme')}</p>*/}
                        <p>theme</p>
                        <SettingTheme />
                    </div>
                    <div className='modal__settings-language'>
                        {/*<p>{translate('language')}</p>*/}
                        <p>language</p>
                        <SettingLanguage />
                    </div>
                </div>
                <div className='modal__settings'>
                    {/*<div className='modal__settings-emoji'>*/}
                    {/*    <p>{translate('emoji')}</p>*/}
                    {/*    <SettingEmoji*/}
                    {/*        emoji={emoji}*/}
                    {/*        changeActiveEmoji={changeActiveEmoji}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className='modal__settings-private'>*/}
                    {/*    <p>{translate('chat')}</p>*/}
                    {/*    <SettingPrivateChat*/}
                    {/*        privateChat={privateChat}*/}
                    {/*        changeActivePrivateChat={changeActivePrivateChat}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
                <div className='modal__settings'>
                    {/*<p>{translate('default')}</p>*/}
                    <p>Default settings</p>
                    <SettingDefault />
                </div>
        </Fragment>
    );
};

Settings.propTypes = {
    hideModal: PropTypes.func.isRequired,
};

export default Settings;