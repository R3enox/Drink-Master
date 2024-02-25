import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
import '../../../i18n';

const TypingText = () => {
  const { t, i18n } = useTranslation();
  return (
    <TypeAnimation
      sequence={[
        t('TypingText'),
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
