import { takeEvery, put, call, apply, select } from 'redux-saga/effects';
import requestHelper from "../utils/requestHelper";
import * as constants from '../../constants';
import * as selectors from '../selectors';
import * as actions from "../actions";

export default function* watchSaga() {
    yield takeEvery(constants.CHAT, drawChat);
    yield takeEvery(constants.ADD_EMOJI_TO_MESSAGE, addEmoji);
    yield takeEvery(constants.SHOW_MENU_EMOJI, showMenuEmoji);
    yield takeEvery(constants.UPDATE_MESSAGE_VALUE, updateMessageValue);
    yield takeEvery(constants.CLICK_BUTTON_SEND, clickButtonSend);
    yield takeEvery(constants.OPEN_PRIVATE_CHAT, openPrivateChat);
}

export function* drawChat() {
    yield put(actions.idReceiverAction({ idReceiver: constants.ALL }));
    yield put(actions.changeWindowState({ state: constants.CHAT }));
    yield put(actions.changeStateChat({ chat: constants.PUBLIC }));

    const chat = yield select(selectors.getStateChat);
    const idSender = yield select(selectors.getIdSender);
    const idReceiver = yield select(selectors.getIdReceiver);
    const url = `${constants.LOCALHOST}/messages?chat=${chat}&sender=${idSender}&receiver=${idReceiver}`;
    const messages = yield call(requestHelper.sendGet, url);
    yield put(actions.setToMessagesListAction( messages ));
}

export function* addEmoji(action) {
    const { native: emoji } = action.payload;
    console.log(action.payload.native);
    // console.log(yield select(selectors.getMessage));
    // const mes = yield select(selectors.getMessage);
    const messageValue = document.getElementById('textMassage').value;
    const message = `${messageValue}${emoji}`;
    yield put(actions.addEmojiAction({ message: message }));
}

export function* showMenuEmoji() {
    yield put(actions.showEmojiAction({ emojiMenu: true }));
    document.addEventListener('click', closeMenuEmoji);
}

export function closeMenuEmoji() {
    put(actions.showEmojiAction({ emojiMenu: false }));
    document.addEventListener('click', closeMenuEmoji);
}

export function* updateMessageValue(action) {
    const message = action.payload.target.value;
    yield put(actions.updateMessageValueAction({ message: message }));
}

export function* clickButtonSend(action) {
    const date = new Date().getTime();

    const messageBody = {
        date: date,
        sender: yield select(selectors.getIdSender),
        message: yield select(selectors.getMessage),
        receiver: yield select(selectors.getIdReceiver),
    };

    const myMessage = {
        date: date,
        name:  yield select(selectors.getName),
        email:  yield select(selectors.getEmail),
        message: yield select(selectors.getMessage),
    };

    const url = `${constants.LOCALHOST}/message`;
    yield call(requestHelper.sendPost, url, messageBody);

    yield put(actions.updateMessageValueAction({ message: '' }));
    const messageList = [...yield select(selectors.getMessagesList), myMessage];
    yield put(actions.updateMessageListAction( messageList ));
}

export function* openPrivateChat (action) {
    const activePrivateChat = yield select(selectors.getActivePrivateChat);

    if (!activePrivateChat) {
        return;
    }

    const idReceiver = action.payload.target.id;

    yield put(actions.changeWindowState({ state: constants.CHAT }));
    yield put(actions.idReceiverAction({ idReceiver: idReceiver }));
    yield put(actions.changeStateChat({ chat: constants.PRIVATE }));

    const chat = yield select(selectors.getStateChat);
    const idSender = yield select(selectors.getIdSender);
    const url = `${constants.LOCALHOST}/messages?chat=${chat}&sender=${idSender}&receiver=${idReceiver}`;
    const messages = yield call(requestHelper.sendGet, url);
    yield put(actions.setToMessagesListAction( messages ));
}