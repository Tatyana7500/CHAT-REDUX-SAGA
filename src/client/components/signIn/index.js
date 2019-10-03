import React from 'react';
import { getUsers, getIsModalOpen, getErrorText, getIsSuccessRegister } from '../../selectors';
import constants from '../../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import SignIn from './SignIn.jsx';
import './SignIn.css';

export const mapStateToProps = state => ({
    isModalOpen: getIsModalOpen(state),
    errorText: getErrorText(state),
    isSuccessRegister: getIsSuccessRegister(state),
});

export const mapDispatchToProps = dispatch => ({
    handleHide: payload => dispatch({ type: constants.HANDLE_HIDE, payload}),
    createUser: payload => dispatch({ type: constants.CREATE_USER, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);