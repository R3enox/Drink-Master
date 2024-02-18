// import axios from 'axios';
// // const token =
// //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZkMzk4NzQ2YWQ5N2NjNjlkODMwNSIsImlhdCI6MTcwODIwMTA5NCwiZXhwIjoxNzA4MjQ0Mjk0fQ.X3YUs6AienYgKyVG49_6542gPSkp9DwZedP_vs2xyvk';
// const baseURL = 'http://localhost:3000';
// // axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// export const drinksAPI = axios.create({ baseURL });

// export const getDrinks = async (_, thunkAPI) => {
//   try {
//     const data = await drinksAPI.get('/api/drinks');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };
// export const filterDrinks = async (filters, thunkAPI) => {
//   try {
//     const queryParams = new URLSearchParams();
//     if (filters.category) {
//       queryParams.append('category', filters.category);
//     }
//     if (filters.ingredient) {
//       queryParams.append('ingredient', filters.ingredient);
//     }
//     if (filters.keyName) {
//       queryParams.append('keyName', filters.keyName);
//     }
//     const queryString = queryParams.toString();
//     const { data } = await drinksAPI.get(`api/drinks/search?${queryString}`);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };
