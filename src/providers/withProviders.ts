import {withReduxProvider} from "./withReduxProvider.tsx";
import {compose} from "@reduxjs/toolkit";

export const withProviders = compose(
    withReduxProvider,
    withAuthProvider,
);
