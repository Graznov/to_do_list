import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthDataResponse, ErrorResponse, FetchStatus} from "../types.ts";
import {registrationRequest} from "./authThunk.ts";



export interface Auth {
    authData: AuthDataResponse | null,
    authFetchStatus: FetchStatus,
    error: ErrorResponse | null,
    isAuth:boolean
}

const initialState:Auth = {
    authData:null,
    authFetchStatus: 'idle',
    error: null,
    isAuth:false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectAuthData: (state) => state.authData,
        selectAuthFetchStatus: (state) => state.authFetchStatus,
        selectError: (state) => state.error,
        selectIsAuth: (state) => state.isAuth,
    },
    reducers:{

        setToken(state, action: PayloadAction<string>) {
            if (state.authData?.accessToken) {
                    state.authData.accessToken = action.payload;
                }
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(registrationRequest.pending, (state) => {
                state.authFetchStatus = 'loading';
                state.error = null;

            })
            .addCase(registrationRequest.fulfilled, (state, action) => {
                state.authFetchStatus = 'succeeded';
                state.authData = action.payload;
                state.error = null;
                state.isAuth = true
            })
            .addCase(registrationRequest.rejected, (state, action) => {
                state.authFetchStatus = 'failed';
                state.error = action.payload
            })

    }


})

export const { selectAuthData } = auth.selectors;

export const {
    setToken,

} = auth.actions;
export default auth.reducer