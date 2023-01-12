import { createSlice } from '@reduxjs/toolkit';
import {putToLocal} from '../../Utils/localUser';
import  {userAuthSet}  from '../../Utils/userAuth';

const userCredSlice = createSlice({
    name: 'userReducer',
    initialState: {
        // status:"loggedin",
        // status:"notloggedin",
        // status:"null",
        data:{}
    },

    reducers: {

        // Save user data
        saveUser:(state,action)=>{
            putToLocal(action.payload)
            state.data=action.payload;
        },
        
        // Get user data
        getUser:(state,action)=>{
            state.data=action.payload
        },
        
        // Change user status
        changeUserStatus:(state, action)=>{
            state.status=action.payload;
            userAuthSet(action.payload)
        }
    },
});

export const {
    saveUser,
    getUser,
    changeUserStatus
} = userCredSlice.actions;

export default userCredSlice.reducer;