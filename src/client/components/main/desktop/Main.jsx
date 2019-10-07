import ButtonSettings from '../components/buttonSettings/desktop';
import ContentBlock from '../components/contentBlock/desktop';
import MainHeader from '../components/mainHeader/desktop';
import React from 'react';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div className='header__settings'>
                    <ButtonSettings />
                </div>
                <div className='main'>
                    <MainHeader />
                    <ContentBlock />
                </div>
            </div>
        )
    }
}

export default MainPage;