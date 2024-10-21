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