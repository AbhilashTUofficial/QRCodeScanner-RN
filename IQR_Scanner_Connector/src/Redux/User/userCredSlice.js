import { createSlice } from '@reduxjs/toolkit';
import getFromLocal from '../../Utils/getFromLocal';
import putToLocal from '../../Utils/putToLocal';

const userCredSlice = createSlice({
    name: 'userReducer',
    initialState: [],

    reducers: {
        saveUser:(state,action)=>{
            state=action.payload;
            putToLocal(action.payload)
        },
        getUser:(state)=>{
            console.log("called")
            state.push(getFromLocal())
        }
    },
});

export const {
    saveUser,
    getUser
} = userCredSlice.actions;

export default userCredSlice.reducer;