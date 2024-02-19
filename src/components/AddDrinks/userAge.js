export const userAge = (dateOfBirth) => {
  // Разбиваем строку на компоненты
  const [day, month, year] = dateOfBirth.split('/').map(Number);

  // Получаем текущую дату
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Месяцы начинаются с 0
  const currentDay = today.getDate();

  // Вычисляем возраст
  let age = currentYear - year;

  // Учитываем месяц и день рождения
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age -= 1;
  }
  console.log(age);
  return age;
};
