import { useEffect, useState } from 'react';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/PageTitle';

const MyDrinksPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://drink-master-4fm6.onrender.com',
    });

    const setToken = (token) => {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    const getMyDrinks = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2Y3MjQwOWJkZjYzNTUyMTE2MWVjMiIsImlhdCI6MTcwODE5MzY1MSwiZXhwIjoxNzA4MTk3MjUxfQ.YOUlCNq5nmD6bg-wpdC5L3rOPdoXCk69uiCtUk8CgFw';
        setToken(token);

        const { data } = await api.get('/api/drinks/own');

        console.log('Отримано напої:', data);
        setData(data);
      } catch (error) {
        console.error('Помилка отримання напоїв:', error.message);
        throw error;
      }
    };

    getMyDrinks();
  }, []);

  // console.log('MyDrinksPage:', data);
  return (
    <div>
      <PageTitle title="My drinks" />
      {data && <DrinksList data={data} />}
    </div>
  );
};

export default MyDrinksPage;

import axios from 'axios';
