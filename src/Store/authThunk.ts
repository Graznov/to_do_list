import {createAsyncThunk} from "@reduxjs/toolkit";
import {RegistrationRequest} from "../types.ts";
import {authService} from "./authService.ts";
import * as axios from "axios";

export const registrationRequest = createAsyncThunk('auth', async (data: RegistrationRequest, thunkApi) => {

    try {
        const response = await authService.registration(data);
        return response.data;


    } catch(err) {
        if (axios.isAxiosError(err)) {
            return thunkApi.rejectWithValue(err.response?.data);
        }

    }

});

export const checkAuthRequest = createAsyncThunk(
    'auth/refresh',
    async (_payload: void, thunkApi) => {
        try {
            const response = await authService.checkAuth();
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return thunkApi.rejectWithValue(err.response?.data);
            }
        }
    },
);

export const signinRequest = createAsyncThunk(
    'auth/signin',
    async (data: LoginRequestData, thunkApi) => {
        try {
            const response = await authService.signin(data);
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return thunkApi.rejectWithValue(err.response?.data);
            }
        }
    },
);

export const logoutRequest = createAsyncThunk('auth/logout', async (_data, thunkApi) => {
    try {
        const response = await authService.logout();
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return thunkApi.rejectWithValue(err.response?.data);
        }
    }
});
