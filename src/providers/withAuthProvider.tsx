import {ReactElement, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../Store/hooks.ts";
import {selectAuthFetchStatus} from "../Store/auth.ts";
import {checkAuthRequest} from "../Store/authThunk.ts";

export interface AuthProviderProps {
    children: ReactElement;
}

function AuthProvider({ children }: AuthProviderProps) {
    const fetchStatus = useAppSelector(selectAuthFetchStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let isMounted = true;

        (async () => {
            if (isMounted) {
                dispatch(checkAuthRequest());
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [dispatch]);

    if (fetchStatus === 'loading') {
        return <div>Loading...</div>;
    }

    return children;
}

export const withAuthProvider = (component: () => JSX.Element) => () => (
    <AuthProvider>{component()}</AuthProvider>
);
