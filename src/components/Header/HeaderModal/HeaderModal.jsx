
import { Modal } from '@mui/material';
import sprite from '../../../assets/sprite.svg';
// import { MdClose } from 'react-icons/md';

const HeaderModal = ({ children, isOpen, openFnc }) => {
  return (
    <Modal open={isOpen} onClose={openFnc}>
      <div className="absolute bg-primary-text-button-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px]    items-center flex flex-col">
        <button
          className="absolute items-center flex justify-center top-[18px] right-[18px]"
          onClick={openFnc}
        >
          {/* <MdClose className=" w-[px] h-[24px] md:w-[32px] md:h-[32px]" /> */}
          <svg className="stroke-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default HeaderModal;
