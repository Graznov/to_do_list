import {combineReducers} from "@reduxjs/toolkit";
import defSlice, {TaskState} from './defSlice.ts'
import styleSlice from "./styleSlise.ts";

export const rootReduser = combineReducers({
    defSlice,
    styleSlice
})