import { TypeAnimation } from 'react-type-animation';
import css from './TypingText.module.css';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        `Craft Your Perfect\nDrink with Drink Master`,
        2000,
        (el) => el.classList.remove(CURSOR_CLASS_NAME),
        6000,
        (el) => el.classList.add(CURSOR_CLASS_NAME),
        '',
      ]}
      speed={10}
      style={{
        whiteSpace: 'pre-line',
        // fontSize: '0.9em',
        height: '100px',
        // weight: '715px',
        display: 'block',
      }}
      repeat={Infinity}
      cursor={false}
      className={`${css.type}${CURSOR_CLASS_NAME}`}
    />
  );
};

export default TypingText;
