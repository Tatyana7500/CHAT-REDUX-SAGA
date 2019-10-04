import React from 'react';
import './Main.css';
import ButtonSettings from './components/buttonSettings';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div className='header__settings'>
                    <ButtonSettings />
                </div>
                {/*<div className='main'>*/}
                {/*    <MainHeader*/}
                {/*        // name={this.state.name}*/}
                {/*        // translate={translate}*/}
                {/*        // email={this.state.email}*/}
                {/*        // clickButtonLogOut={logout}*/}
                {/*    />*/}
                {/*    <ContentBlock*/}
                {/*        // name={this.state.name}*/}
                {/*        // translate={translate}*/}
                {/*        // emoji={this.props.emoji}*/}
                {/*        // addEmoji={this.addEmoji}*/}
                {/*        // closeMenu={this.closeMenu}*/}
                {/*        // chat={this.state.clickChat}*/}
                {/*        // showEmoji={this.showEmoji}*/}
                {/*        // usersOnline={this.state.usersOnline}*/}
                {/*        // userState={this.state.userState}*/}
                {/*        // clickChat={this.clickButtonChat}*/}
                {/*        // usersList={this.state.usersList}*/}
                {/*        // clickUsers={this.clickButtonUser}*/}
                {/*        // emojiMenu={this.state.emojiMenu}*/}
                {/*        // messages={this.state.messagesList}*/}
                {/*        // privateChat={this.props.privateChat}*/}
                {/*        // openPrivateChat={this.openPrivateChat}*/}
                {/*        // clickButtonSend={this.clickButtonSend}*/}
                {/*        // windowState={this.state.mainWindowState}*/}
                {/*        // updateMessageValue={this.updateMessageValue}*/}
                {/*        // messageAreaValue={this.state.messageAreaValue}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default MainPage;