// import { Suspense } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Footer } from '../Footer/Footer';
// import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
// import {
//   getCategories,
//   getGlasses,
//   getIngredients,
// } from '../../redux/filters/operations';
// import { useFilters } from 'hooks/useFilters';

// const Layout = ({ children }) => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectAuthIsLoggedIn);
//   const { categories, ingredients, glasses } = useFilters();

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     if (!categories) dispatch(getCategories());
//     if (!ingredients) dispatch(getIngredients());
//     if (!glasses) dispatch(getGlasses());

//     console.log('USE EFFECT');
//   }, [isLoggedIn, categories, ingredients, glasses, dispatch]);

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <div className="mx-auto">
//         {children}
//         <Footer />
//       </div>
//     </Suspense>
//   );
// };

// export default Layout;
