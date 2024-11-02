import {combineReducers} from "@reduxjs/toolkit";
import defSlice from './defSlice.ts'
import styleSlice from "./styleSlise.ts";
import auth from "./auth.ts";

export const rootReduser = combineReducers({
    defSlice,
    styleSlice,
    auth
})