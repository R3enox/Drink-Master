import { useState } from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../assets/sprite.svg';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';
import { CalendarGlobalStyles } from './Calendar.styled';

const Calendar = ({ getDateOfBirth }) => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    const formattedDate = format(date, 'dd/MM/yyyy');
    getDateOfBirth(formattedDate);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        placeholderText="dd/mm/yyyy"
        showIcon
        toggleCalendarOnIconClick
        icon={
          <svg className="w-[20px] h-[20px] top-[18px] right-[18px] stroke-primary-text-color">
            <use href={sprite + '#icon-calendar'}></use>
          </svg>
        }
        customInput={
          <MaskedInput
            className="w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color  hover:border-grey-text-color hover:color-transparent text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        }
        onChange={handleDateChange}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default Calendar;
