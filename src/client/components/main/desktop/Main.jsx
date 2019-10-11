import ContentBlock from '../components/contentBlock/desktop';
import MainHeader from '../components/mainHeader/desktop';
import { Wrapper, Root } from './styledComponent';
import PropTypes from 'prop-types';
import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        const { initSockets } = props;

        initSockets();
    }
    static propTypes = {
        initSockets: PropTypes.func.isRequired,
    };

    render() {
        return (
            <Root>
                <Root.Wrapper>
                    <Wrapper.Header>
                        <MainHeader/>
                    </Wrapper.Header>
                    <Wrapper.Content>
                        <ContentBlock/>
                    </Wrapper.Content>
                </Root.Wrapper>
            </Root>
        );
    }
}

export default MainPage;