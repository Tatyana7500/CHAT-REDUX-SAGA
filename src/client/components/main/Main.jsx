
import ContentBlock from './components/contentBlock';
import MainHeader from './components/mainHeader';
import { Wrapper, Window } from './styledComponent';
import React from 'react';

import PropTypes from 'prop-types';

class MainPage extends React.Component {

    // static propTypes = {
    //     theme: PropTypes.object.isRequired,
    // };

    render() {

        return (
            <Window>
            <Wrapper>
               <Wrapper.Header>
                    <MainHeader/>
                </Wrapper.Header>
                <Wrapper.Content>
                    <ContentBlock/>
                </Wrapper.Content>
            </Wrapper>
            </Window>

        );
    }
}

export default MainPage;