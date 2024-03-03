import { scrollToTop } from 'helpers/scrollToTop.js';
import IconUp from './IconUp';

const ScrollBtn = () => {
  window.onscroll = () => {
    const scrollElement = document.querySelector('.scroll');
    if (window.scrollY > 200) {
      scrollElement.classList.remove('hidden');
    } else {
      scrollElement.classList.add('hidden');
    }
  };
  return (
    <button
      type="button "
      className="fixed bottom-[150px] right-[5px] z-[9999] p-[3px] rounded-[50%] bg-primary-text-button-color text-primary-text-color scroll hidden hover:bg-primary-text-button-color hover:text-filter-scroll-text md:right-[5px] md:p-[5px] lg:right-[70px] lg:p-[10px]"
      onClick={() => scrollToTop()}
    >
      <IconUp />
    </button>
  );
};

export default ScrollBtn;
