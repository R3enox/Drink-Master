// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { logOut } from './authOperations';


// const initialState = {
//   accessToken: null,
//   refreshToken: null,
//   sid: '',
//   user: null,
//   userId: null,
//   userName: '',
//   userEmail: '',
//   userAvatar: '',
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;

//   if (action.payload === 401) {
//     state.accessToken = '';
//   }
// };

// export const authSlice = createSlice({
//   name: 'auth/api',
//   initialState,
//   reducers: {
//     // setAccessToken: (state, action) => {
//     //   state.accessToken = action.payload;
//     // },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(logOut.fulfilled, () => {
//         return initialState;
//       })

//       .addMatcher(
//         isAnyOf(
        
//           logOut.pending
//         ),
//         (state) => {
//           state.isLoading = true;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
         
//           logOut.rejected
//         ),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       )

    //   .addCase(authOperations.updateUserById.pending, handlePending)
    //   .addCase(authOperations.updateUserById.fulfilled, (state, action) => {
    //     state.userEmail = action.payload.email;
    //     state.userName = action.payload.name;
    //     state.isLoggedIn = true;
    //   })
    //   .addCase(authOperations.updateUserById.rejected, handleRejected)

    //   .addCase(authOperations.upLoadAvatar.pending, handlePending)
    //   .addCase(authOperations.upLoadAvatar.fulfilled, (state, action) => {
    //     state.userAvatar = action.payload.user.avatar;
    //   })
    //   .addCase(authOperations.upLoadAvatar.rejected, handleRejected)

    //   .addMatcher(
    //     (action) => action.type.endsWith(`/rejected`),
    //     (_state, { payload }) => {
    //       if (payload.code === 401) {
    //         return initialState;
    //       }
    //     }
//     //   );
//   },
// });

// export default authSlice.reducer;
// export const { setAccessToken } = authSlice.actions;
