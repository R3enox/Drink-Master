import { useEffect } from 'react';

import {
  BgMotivModalClassNames,
  BgMotivModalKeys,
} from '../../../constants/motivModalClassNames';
import sprite from 'assets/sprite.svg';

export const MotivatingModal = ({
  onClose,
  achievementText,
  classNamesKey,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const mobile = BgMotivModalClassNames[BgMotivModalKeys[classNamesKey]].MOBILE;
  const tablet = BgMotivModalClassNames[BgMotivModalKeys[classNamesKey]].TABLET;

  return (
    <div className="motivating-modal-backdrop" onClick={handleOverlayClick}>
      <div className={`motivating-modal-modal ${mobile} ${tablet}`}>
        <p className="motiv-modal-title">{achievementText}</p>
        <button className="motiv-modal-close-btn" onClick={onClose}>
          <svg className="motiv-modal-close-btn-icon">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
