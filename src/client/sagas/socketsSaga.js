import { put, call, takeEvery, fork, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as selectors from '././../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';
import { createSocket } from '../utils/socketsHelper';

let socket = null;
let channel = null;
let name;
let idReceiver;
let stateChat;

export default function* watchSaga() {
    yield takeEvery(constants.SEND_ONLINE, sendOnline);

    yield take(constants.INIT_SOCKETS);
    channel = yield call(initSocketChannel);
    yield fork(channelLoop);
    yield call(sendOnline);
    name = yield select(selectors.getName);
    idReceiver = yield select(selectors.getIdReceiver);
    stateChat = yield select(selectors.getStateChat);

}

function* sendOnline() {
    if (!socket || !channel) {
        return;
    }

    const userId = yield select(selectors.getIdSender);
    socket.emit(constants.ONLINE, userId);
}

function initSocketChannel() {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST);

        socket.on(constants.ONLINE, data => onOnlineMessage(emitter, data));
        socket.on(constants.MESSAGE, data => onMessagePublic(emitter, data));
        socket.on(constants.MESSAGE_PRIVATE, data => onMessagePrivate(emitter, data));

        return () => {
            socket.close();

            channel = null;
            socket = null;
        };
    });

    return channel;
}

export const onOnlineMessage = (emitter, data) => {
    emitter(actions.addUserOnlineAction(data));
};

export const onMessagePublic = (emmiter, data) => {
    if (data.name !== name) {
        emmiter(actions.socketMessageAction(data));
    }

};

export const onMessagePrivate = (emmiter, data) => {
    emmiter(actions.socketMessageAction(data));
};

export function* channelLoop() {

    while (channel) {
        const action = yield take(channel);
        if (action.type === constants.USER_ONLINE){
            yield put(action);
        }
        if (action.type === 'SOCKET_MESSAGE'){
            idReceiver = yield select(selectors.getIdReceiver);
            stateChat = yield select(selectors.getStateChat);
            if (stateChat === constants.PUBLIC && idReceiver === action.payload.id) {
                yield put(action);
            } else if (stateChat === constants.PRIVATE && action.payload.id === idReceiver) {
                yield put(action);
            }
        }
    }
}