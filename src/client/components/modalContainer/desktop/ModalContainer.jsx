import ErrorWindow from '../../common/errorWindow/desktop';
import Settings from "../../main/components/settings/desktop";
import * as constants from '../../../../constants';
import Modal from "../../../libs/modal/desktop/Modal";
import React from "react";
import { ModalWrapper } from './styledComponent';

const ModalContainer = props => {
    const {
        theme,
        modalType,
        isModalOpen,
    } = props;

    return isModalOpen ? (
        <Modal>
            <ModalWrapper theme={ theme }>
                {modalType === constants.ERROR_MODAL_TYPE ?
                    <ErrorWindow /> : <Settings />
                }
            </ModalWrapper>
        </Modal>
    ) : null;
};

export default React.memo(ModalContainer);
