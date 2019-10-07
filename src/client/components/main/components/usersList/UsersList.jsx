import PropTypes from 'prop-types';
import React from 'react';
import { Content, Users, Lonely } from './styledComponent';

class UsersList extends React.Component {
    static propTypes = {
        // translate: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
        usersOnline: PropTypes.array.isRequired,
        openPrivateChat: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
    };

    render() {
        const { id, users, openPrivateChat, usersOnline, theme } = this.props;

        return (
            <Content>
                <Users>
                    <Users.title>
                        <Users.info>name</Users.info>
                        <Users.info>email</Users.info>
                    </Users.title>
                    { users.map((item, index) => {
                        if (users.length !== 1) {
                            if (id !== item._id) {
                                const isOnline = usersOnline.includes(item._id);

                                if (isOnline) {
                                    return (
                                        <Users.card>
                                            <Users.online>
                                                <Users.info id={item._id} onClick={openPrivateChat}>{item.name}</Users.info>
                                                <Users.info id={item._id} onClick={openPrivateChat}>{item.email}</Users.info>
                                            </Users.online>
                                        </Users.card>
                                    );
                                } else {
                                    return (
                                        <Users.card>
                                            <Users.info id={item._id} onClick={openPrivateChat}>{item.name} </Users.info >
                                            <Users.info id={item._id} onClick={openPrivateChat}>{item.email}</Users.info >
                                        </Users.card>
                                    );
                                }
                            }
                        } else {
                            return (
                                <Lonely key={ index }>
                                    You're lonely!
                                </Lonely>
                            );
                        }
                    })}
                </Users>
            </Content>
        );
    }
}

export default UsersList;