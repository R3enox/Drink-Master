import { useState } from 'react';

export const ReusableInput = ({ type, name, placeholder, pattern }) => {
  const [value, setValue] = useState(null);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValue({ [name]: value });
  };
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        onChange={handleChange}
      />
    </>
  );
};
