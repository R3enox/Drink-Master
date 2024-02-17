import {
  ModalContentWrp,
  CLoseBtn,

} from '../HeaderModal/HeaderModal.styled';
import { Modal } from '@mui/material';
import { MdClose } from 'react-icons/md';

const HeaderModal = ({ children, isOpen, openFnc }) => {
  return (
    <Modal open={isOpen} onClose={openFnc}>
      <ModalContentWrp>
        <CLoseBtn onClick={openFnc}>
          <MdClose />
        </CLoseBtn>
        {children}
      </ModalContentWrp>
    </Modal>
  );
};

export default HeaderModal;
