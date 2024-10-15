import {createSlice} from '@reduxjs/toolkit'
import {AuthDataResponse, ErrorResponse, FetchStatus} from "../types.ts";



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
    reducers:{


    },

})

export const {


} = auth.actions;
export default auth.reducer