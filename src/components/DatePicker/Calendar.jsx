import { useState } from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../assets/sprite.svg';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';
import { CalendarGlobalStyles } from './Calendar.styled';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import { useForm } from 'react-hook-form';

const Calendar = ({ getDateOfBirth }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
  });

  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    const formattedDate = format(date, 'dd/MM/yyyy');
    getDateOfBirth(formattedDate);
  };

  return (
    <>
      <DatePicker
        className="relative"
        selected={startDate}
        placeholderText={t('inputPlaceholder.DatePicker.dateFormat')}
        showIcon
        toggleCalendarOnIconClick
        icon={
          <svg className="w-[20px] h-[20px] top-[18px] right-[18px] stroke-primary-text-color">
            <use href={sprite + '#icon-calendar'}></use>
          </svg>
        }
        customInput={
          <MaskedInput
            className={`input-form ${errors?.dateOfBirth && 'error'} ${
              dirtyFields.dateOfBirth && !errors.dateOfBirth && 'correct'
            }`}
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            {...register('dateOfBirth', {
              message: 'Date of birth is required',
            })}
          />
        }
        onChange={handleDateChange}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
        {...(errors?.dateOfBirth && (
          <p className="errorMsg">{errors.dateOfBirth.message}</p>
        ))}
        {...(dirtyFields.dateOfBirth && !errors.dateOfBirth && (
          <p className="correctMsg">
            {t('inputPlaceholder.SignInForm.passwordPatternCorrect')}
          </p>
        ))}
      />

      <CalendarGlobalStyles className="react-datepicker" />
    </>
  );
};

export default Calendar;
