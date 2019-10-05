import ErrorWindow from '../common/errorWindow';
import Settings from "../main/components/settings";
import * as constants from '../../../constants';
import Modal from "../../libs/modal/Modal";
import React from "react";

const ModalContainer = props => {
    const {
        modalType,
        isModalOpen,
    } = props;

    return isModalOpen ? (
        <Modal>
            <div className='modal'>
                {modalType === constants.ERROR_MODAL_TYPE ?
                    <ErrorWindow /> : <Settings />
                }
            </div>
        </Modal>
    ) : null;
};

export default React.memo(ModalContainer);
