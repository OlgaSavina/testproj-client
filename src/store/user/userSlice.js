import { createSlice } from '@reduxjs/toolkit';


const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: null,
    isAuth: false

}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login:(state, action)=>{
        state.user = action.payload
        state.isAuth = true
    },
    logout:(state, action)=>{
        state.isAuth = false
        state.user = null
    }
  
   
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = userSlice.actions

export default userSlice.reducer