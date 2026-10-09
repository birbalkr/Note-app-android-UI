import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, type PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { hydrateAuth, logout } from "./authSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { store } from "./store";

const AUTH_STORAGE_KEY = "@memento/auth-user";

function AuthPersistence({ children }: PropsWithChildren) {
    const dispatch = useAppDispatch();
    const { user, isAuthenticated, isHydrated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        const restoreAuth = async () => {
            try {
                const savedUser = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
                dispatch(hydrateAuth(savedUser ? JSON.parse(savedUser) : null));
            } catch (error) {
                console.error("Unable to restore saved login.", error);
                dispatch(hydrateAuth(null));
            }
        };

        void restoreAuth();
    }, [dispatch]);

    useEffect(() => {
        if (!isHydrated) {
            return;
        }

        const persistAuth = async () => {
            try {
                if (isAuthenticated && user) {
                    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
                } else {
                    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
                }
            } catch (error) {
                console.error("Unable to save login.", error);
                dispatch(logout());
            }
        };

        void persistAuth();
    }, [dispatch, isAuthenticated, isHydrated, user]);

    return children;
}

export function AuthProvider({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <AuthPersistence>{children}</AuthPersistence>
        </Provider>
    );
}
