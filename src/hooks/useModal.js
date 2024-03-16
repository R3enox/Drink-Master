import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleModal };
};
