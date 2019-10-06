import ButtonSettings from './components/buttonSettings';
import ContentBlock from './components/contentBlock';
import MainHeader from './components/mainHeader';
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
        );
    }
}

export default MainPage;