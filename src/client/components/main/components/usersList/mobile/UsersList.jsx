import PropTypes from 'prop-types';
import React from 'react';
import { Content, Users, Lonely } from './styledComponent';
import { ThemeProvider } from 'styled-components';

class UsersList extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
        theme: PropTypes.object.isRequired,
        usersOnline: PropTypes.array.isRequired,
        openPrivateChat: PropTypes.func.isRequired,
    };

    render() {
        const { id, users, openPrivateChat, usersOnline, theme } = this.props;

        return (
            <ThemeProvider theme={theme}>
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
                                                <Users.online key={index}>
                                                    <Users.info id={item._id} onClick={openPrivateChat}>{item.name}</Users.info>
                                                    <Users.info id={item._id} onClick={openPrivateChat}>{item.email}</Users.info>
                                                </Users.online>
                                            </Users.card>
                                        );
                                    } else {
                                        return (
                                            <Users.card key={index}>
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
            </ThemeProvider>
        );
    }
}

export default UsersList;