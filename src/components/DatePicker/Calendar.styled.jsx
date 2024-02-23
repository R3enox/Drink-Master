import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
  }
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 219px;
    padding: 14px;
    background: #161f37;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background: #161f37;
    margin-bottom: 16px;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-style: normal;
    line-height: 24px;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: rgba(243, 243, 243, 0.5);
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__navigation {
    margin-top: 19px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    
    border-radius: 50%;
    line-height: 18px;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.585937;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    width: 22px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 1;
  }
  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    color: rgba(243, 243, 243, 0.2);
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    padding: 0;
    fill: none;
  }
`;
