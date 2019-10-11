import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper, Users, Title, User } from './styledComponent';

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
            <Wrapper>
                <Wrapper.Users>
                    <Users.Title>
                        <Title.span>name</Title.span>
                        <Title.span>email</Title.span>
                    </Users.Title>
                    { users.map((item, index) => {
                        if (users.length !== 1) {
                            if (id !== item._id) {
                                const isOnline = usersOnline.includes(item._id);

                                    return (
                                        <Users.User key={index}
                                              id={item._id}
                                              isOnline = { isOnline }
                                              onClick={openPrivateChat}>
                                            <User.name id={item._id}>{item.name}</User.name>
                                            <User.email id={item._id}>{item.email}</User.email>
                                        </Users.User>
                                    );
                                }

                        } else {
                            return (
                                <Users.Lonely key={ index }>
                                    You're lonely!
                                </Users.Lonely>
                            );
                        }
                    })}
                </Wrapper.Users>
            </Wrapper>
        );
    }
}

export default UsersList;