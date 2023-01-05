import {configureStore} from '@reduxjs/toolkit';

import userReducer from '../Redux/User/userCredSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});