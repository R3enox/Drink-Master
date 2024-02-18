// import { useEffect, useState } from 'react';
import DrinksItem from '../DrinksItem/DrinksItem';
import axios from 'axios';

const DrinksList = ({ data }) => {
  return (
    <ul>
      {data.map((drink) => (
        <DrinksItem key={drink._id} myDrink={drink} />
      ))}
    </ul>
  );
};

export default DrinksList;
