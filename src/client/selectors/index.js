import requestHelper from '../utils/requestHelper';
import { LOCALHOST } from '../../constants';

export const registerUserService = (request) => {
    const url = `${LOCALHOST}/signin`;
    return requestHelper.sendPost(url, request.user);
};