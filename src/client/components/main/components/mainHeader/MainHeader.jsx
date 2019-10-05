import PropTypes from 'prop-types';
import './MainHeader.css';
import React from 'react';

const MainHeader = (props) => {
   // const { name, email, translate, clickButtonLogOut } = props;
    const { leaveAccount, setName, setEmail } = props;
    return (
        <div className='header'>
            <div className='wrapper header__wrapper'>
                <div className='info'>
                    <div>
                        <span>name:</span>
                        <span className='info__name'>{setName}</span>
                    </div>
                    <div>
                        <span>email:</span>
                        <span className='info__email'>{setEmail}</span>
                    </div>
                </div>
                <a onClick={leaveAccount} className='btn_logout btn-main logout' id='logOut'>logOut</a>
            </div>
        </div>
    );
};

MainHeader.propTypes = {
    setName: PropTypes.string.isRequired,
    setEmail: PropTypes.string.isRequired,
    // translate: PropTypes.func.isRequired,
    leaveAccount: PropTypes.func.isRequired,
};

export default MainHeader;