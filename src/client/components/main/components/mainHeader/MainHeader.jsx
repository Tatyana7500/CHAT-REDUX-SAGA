import PropTypes from 'prop-types';
import './MainHeader.css';
import React from 'react';

const MainHeader = (props) => {
    const { leaveAccount, name, email } = props;

    return (
        <div className='header'>
            <div className='wrapper header__wrapper'>
                <div className='info'>
                    <div>
                        <span>name:</span>
                        <span className='info__name'>{name}</span>
                    </div>
                    <div>
                        <span>email:</span>
                        <span className='info__email'>{email}</span>
                    </div>
                </div>
                <a onClick={leaveAccount} className='btn_logout btn-main logout' id='logOut'>logOut</a>
            </div>
        </div>
    );
};

MainHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    leaveAccount: PropTypes.func.isRequired,
    // translate: PropTypes.func.isRequired,
};

export default MainHeader;