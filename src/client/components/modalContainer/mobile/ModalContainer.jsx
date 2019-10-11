import ErrorWindow from '../../common/errorWindow/mobile';
import Menu from "../../main/components/menu";
import * as constants from '../../../../constants';
import Modal from "../../../libs/modal/mobile/Modal";
import { ModalWrapper, ModalMenu } from './styledComponent';
import React from "react";

const ModalContainer = props => {
    const {
        modalType,
        isModalOpen,
    } = props;

    return isModalOpen ? (
        <Modal>
            {modalType === constants.ERROR_MODAL_TYPE ?
                <ModalWrapper>
                    <ErrorWindow/>
                </ModalWrapper>
                :
                <ModalMenu>
                    <Menu/>
                </ModalMenu>
            }
        </Modal>
    ) : null;
};

export default React.memo(ModalContainer);
