import PropTypes from 'prop-types';
import React from 'react';
import './UsersList.css';

class UsersList extends React.Component {
    static propTypes = {
        // usersOnline: PropTypes.array.isRequired,
        // translate: PropTypes.func.isRequired,
         users: PropTypes.array.isRequired,
        // openPrivateChat: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
         const { users } = this.props;

        return (
            <div className='content'>
                <div className='user'>
                    <div className='users__title'>
                        <div className='users__info'>name</div>
                        <div className='users__info'>email</div>
                    </div>
                    { 
                        users.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    id={item._id}
                                    className='users__card'>
                                    <p className='users__info' id={item._id} >{item.name}</p>
                                    <p className='users__info' id={item._id} >{item.email}</p>
                                </div>
                            );
                        }) }
                    
                </div>
            </div>
        );
    }
}

export default UsersList;