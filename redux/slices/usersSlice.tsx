import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface is {
  users: any;
  isLoading: boolean,
  error: string
}

const initialState: is = {
  users: [],
  isLoading: false,
  error: ""
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
  extraReducers: (builder: any):any  => {
    builder.addCase(getUsers.pending, (state:any, action:PayloadAction<any>) =>{
        state.isLoading= true;
        state.error= "";
        state.users= []
    })
    .addCase(getUsers.rejected, (state:is, action:any) =>{
        state.isLoading=  false;
        state.error= action.error.message;
        state.users= []
    })
    .addCase(getUsers.fulfilled, (state:is, action:any) =>{
        state.isLoading=  false;
        state.error= "";
        state.users= action.payload;
    })
  },
});

export default usersSlice.reducer;
