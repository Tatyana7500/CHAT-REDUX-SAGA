import { User, Wrapper, Lonely } from './styledComponent';
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
        const {id, users, openPrivateChat, usersOnline} = this.props;

        return (
            <Wrapper>
                <Wrapper.Users>
                    { users.map((item, index) => {
                        if (users.length !== 1) {
                            if (id !== item._id) {
                                const isOnline = usersOnline.includes(item._id);

                                return (
                                    <User key={index}
                                          id={item._id}
                                          isOnline = { isOnline }
                                          onClick={openPrivateChat}>
                                        <User.name id={item._id}>{item.name}</User.name>
                                        <User.email id={item._id}>{item.email}</User.email>
                                    </User>

                                );
                            }
                        } else {
                            return (
                                <Lonely key={ index }>
                                    You're lonely!
                                </Lonely>
                            );
                        }

                    })}
                </Wrapper.Users>
            </Wrapper>
        );
    }
}

export default UsersList;