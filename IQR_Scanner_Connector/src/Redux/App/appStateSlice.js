import { createSlice } from '@reduxjs/toolkit';


const appStateSlice = createSlice({
    name: 'appReducer',
    initialState: {
        imgUri:[],
    },

    reducers: {

        // Save user data
        setImgUri:(state,action)=>{
            console.log(action.payload)
            if(action.payload!==[]){
                state.imgUri.push(action.payload);
            }
        },
    },
});

export const {
    setImgUri,

} = appStateSlice.actions;

export default appStateSlice.reducer;