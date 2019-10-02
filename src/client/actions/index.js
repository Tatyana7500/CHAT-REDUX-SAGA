import { REGISTER_USER } from '../../constants';

export const signInUserAction = (user) => {
    return {
        type: REGISTER_USER,
        user
    }
};