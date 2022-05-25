import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { login, logout, register, fetchCurrentUser } from "services/api-service";



const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerQuery = createAsyncThunk("users/signup", 
async (user, {rejectWithValue})=>{
    try{
        const registeredUser = await register(user);
        toast.success("You have been successfully signed up")
        token.set(registeredUser.token)
        return registeredUser
    } catch (error){
        toast.error(error?.response?.data?.errors?.password?.message || "Sign up error. Probably this email already exists")
        return rejectWithValue(error.message)
    }
}
)

export const loginQuery = createAsyncThunk("users/login", 
async (user, {rejectWithValue})=>{
    try{
        const loginedUser = await login(user);
        token.set(loginedUser.token)
        toast.success("You have been successfully logged in")
        return loginedUser
    } catch (error){
        toast.error("Incorrect login or password")
        return rejectWithValue(error.message)
    }
}
)

export const logoutQuery = createAsyncThunk("users/logout", 
async (_, {rejectWithValue})=>{
    try{
        const logoutUser = await logout();
        token.unset();
        toast.success("You have been logged out")
        return logoutUser
    } catch (error){
        toast.error("You have not been logged out")
        return rejectWithValue(error)
    }
}
)

export const fetchCurrentUserQuery = createAsyncThunk("users/current", 
async (persistedToken, thunkAPI)=>{
    token.set(persistedToken)
    try{
        const user = await fetchCurrentUser();
        return user
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
}
)