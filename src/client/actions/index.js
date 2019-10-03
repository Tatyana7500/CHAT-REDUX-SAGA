import * as constants from '../../constants';

export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const closeModalAction = payload => ({ type: constants.CLOSE_MODAL, payload });
