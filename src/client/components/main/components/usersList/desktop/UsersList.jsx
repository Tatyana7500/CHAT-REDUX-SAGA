import PropTypes from 'prop-types';
import React from 'react';

class UsersList extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
        usersOnline: PropTypes.array.isRequired,
        openPrivateChat: PropTypes.func.isRequired,
    };

    render() {
        const { id, users, openPrivateChat, usersOnline } = this.props;

        return (
            <div className='content'>
                <div className='user'>
                    <div className='users__title'>
                        <div className='users__info'>name</div>
                        <div className='users__info'>email</div>
                    </div>
                    { users.map((item, index) => {
                        if (users.length !== 1) {
                            if (id !== item._id) {
                                const isOnline = usersOnline.includes(item._id);

                                return (
                                <div
                                key={index}
                                id={item._id}
                                className={`users__card ${isOnline ? 'online' : ''}`}>
                                <p className='users__info' id={item._id} onClick={openPrivateChat}>{item.name} </p>
                                <p className='users__info' id={item._id} onClick={openPrivateChat}>{item.email}</p>
                                </div>
                                );
                            }
                        } else {
                            return (
                                <div className="lonely" key={index}>
                                    You're lonely!
                                </div>
                            );
                        }
                    })
                    }
                </div>
            </div>
        );
    }
}

export default UsersList;