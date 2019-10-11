import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../components/logo/desktop/Logo';
import ButtonSettings from './../../buttonSettings/desktop';
import { Wrapper, Button, Nav, UserInfo } from './styledComponent';

const MainHeader = props => {
    const { leaveAccount, getChat, getUsers, name, email, t } = props;

    return (
        <Wrapper>
            <Logo />
            <Wrapper.UserInfo>
                <UserInfo.name children ={`Name: ${name}`} />
                <UserInfo.name children = {`Email: ${email}`} />
            </Wrapper.UserInfo>
            <Wrapper.Nav>
                <Nav.users children = {'USERS'} onClick = {getUsers}/>
                <Nav.chat children = {'CHAT'} onClick = {getChat}/>
            </Wrapper.Nav>
            <Wrapper.Settings>
                <ButtonSettings />
            </Wrapper.Settings>
            <Wrapper.Button>
                <Button.logout href = '#' children = {'LOGOUT'} onClick = {leaveAccount}/>
            </Wrapper.Button>
        </Wrapper>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    getChat: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    leaveAccount: PropTypes.func.isRequired,
};

export default MainHeader;