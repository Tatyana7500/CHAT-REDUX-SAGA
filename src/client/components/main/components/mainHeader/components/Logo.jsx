
import React from 'react';
import img from './../../../../../assets/icons/logo.png'
import { Wrapper } from './styleComponent';

const Logo = () => {


    return (
        <Wrapper>
            <Wrapper.Logo src = {img}/>
        </Wrapper>
    );
};



export default Logo;