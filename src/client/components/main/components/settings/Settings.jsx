import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import SettingEmoji from './components/emojiCheckbox';
import SettingTheme from '../../../common/themeDropdown';
import SettingDefault from './components/defaultSettings';
import SettingLanguage from '../../../common/languageDropdown';
import SettingPrivateChat from './components/privateChatCheckbox';
import { Close, Img, ModalSettings } from './styledComponent';

const Settings = props => {
    const {
        hideModal,
    } = props;

    return (
        <Fragment>
            <Close onClick={hideModal}>
                <Img/>
            </Close>
            <ModalSettings>
                <ModalSettings.item>
                    <ModalSettings.p>theme</ModalSettings.p>
                    <SettingTheme />
                </ModalSettings.item>
                <ModalSettings.item>
                    <ModalSettings.p>language</ModalSettings.p>
                    <SettingLanguage />
                </ModalSettings.item>
            </ModalSettings>
            <ModalSettings>
                <ModalSettings.item>
                    <ModalSettings.p>emoji</ModalSettings.p>
                    <SettingEmoji />
                </ModalSettings.item>
                <ModalSettings.item>
                    <ModalSettings.p>chat</ModalSettings.p>
                    <SettingPrivateChat />
                </ModalSettings.item>
            </ModalSettings>
            <ModalSettings>
                <ModalSettings.p>Default settings</ModalSettings.p>
                <SettingDefault/>
            </ModalSettings>
        </Fragment>
    );
};

Settings.propTypes = {
    hideModal: PropTypes.func.isRequired,
};

export default Settings;