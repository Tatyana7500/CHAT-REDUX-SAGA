import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import SettingEmoji from '../components/emojiCheckbox';
import SettingTheme from '../../../../common/themeDropdown/desktop';
import SettingDefault from '../components/defaultSettings';
import SettingLanguage from '../../../../common/languageDropdown/mobile';
import SettingPrivateChat from '../components/privateChatCheckbox';
import { Wrapper, Close, SettingsMobile, Item} from './styledComponent';

const Settings = props => {
    const {
        hrefMainPage,
    } = props;

    return (
        <Wrapper>
            <Wrapper.Close onClick={hrefMainPage}>
                <Close.image/>
            </Wrapper.Close>
            <Wrapper.SettingsMobile>
                <SettingsMobile.Item>
                    <Item.p>theme</Item.p>
                    <SettingTheme />
                </SettingsMobile.Item>
                <SettingsMobile.Item>
                    <Item.p>language</Item.p>
                    <SettingLanguage />
                </SettingsMobile.Item>
                <SettingsMobile.Item>
                    <Item.p>emoji</Item.p>
                    <SettingEmoji />
                </SettingsMobile.Item>
                <SettingsMobile.Item>
                    <Item.p>chat</Item.p>
                    <SettingPrivateChat />
                </SettingsMobile.Item>
                <SettingsMobile.Item>
                    <Item.p>Default settings</Item.p>
                    <SettingDefault/>
                </SettingsMobile.Item>
            </Wrapper.SettingsMobile>
        </Wrapper>
    );
};

Settings.propTypes = {
    hrefMainPage: PropTypes.func.isRequired,
};

export default Settings;