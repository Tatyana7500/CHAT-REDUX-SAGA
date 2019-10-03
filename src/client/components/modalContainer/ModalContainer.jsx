import ErrorWindow from '../common/errorWindow/ErrorWindow.jsx';
import Settings from "../main/components/settings/Settings";
import * as constants from '../../../constants';
import Modal from "../../libs/modal/Modal";
import React from "react";

const ModalContainer = props => {
    const {
        modalType,
        isModalOpen,
        modalContent,
        hideModal,
    } = props;

    console.log(modalType);
    console.log(modalContent);

    return isModalOpen ? (
        <Modal>
            <div className='modal'>
                {modalType === constants.ERROR_MODAL_TYPE ?
                    <ErrorWindow
                        modalContent={modalContent}
                        hideModal={hideModal}
                    /> : null
                }
            </div>
        </Modal>
    ) : null;
};

export default React.memo(ModalContainer);
