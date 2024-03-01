import { useEffect } from 'react';
import sprite from 'assets/sprite.svg';

export const MotivatingModal = ({
  onClose,
  achievementText,
  mobileBgClassName,
  tabletDesktopBgClassName,
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

  return (
    <div className="motivating-modal-backdrop" onClick={handleOverlayClick}>
      <div
        className={`motivating-modal-modal ${mobileBgClassName} ${tabletDesktopBgClassName}`}
      >
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
