import { Authcontext, AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";
import { useContext } from "react";

export default function RootLayout() {
    return (
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
    )
}

function RootNavigator() {
    const { isLoging } = useContext(Authcontext)

    return (
        <Stack>
            <Stack.Protected guard={isLoging}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Protected guard={!isLoging}>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
            </Stack.Protected>
        </Stack>
    )
}