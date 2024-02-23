import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        `Craft Your Perfect Drink with Drink Master`,
        2000,
        (el) => el.classList.remove(CURSOR_CLASS_NAME),
        6000,
        (el) => el.classList.add(CURSOR_CLASS_NAME),
        '',
      ]}
      speed={10}
      style={{
        whiteSpace: 'pre-line',
      }}
      repeat={Infinity}
      cursor={false}
      className={`${CURSOR_CLASS_NAME}`}
    />
  );
};

export default TypingText;
