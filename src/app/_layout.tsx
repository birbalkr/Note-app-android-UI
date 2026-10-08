import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const isLoggedIn = false;



export default function RootLayout() {
    return (
        <React.Fragment>
            <StatusBar />
            <Stack>
                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack.Protected>
                <Stack.Protected guard={!isLoggedIn}>
                    <Stack.Screen name="login" options={{ headerShown: false }} />
                    <Stack.Screen name="register" options={{ headerShown: false }} />
                </Stack.Protected>
            </Stack>
        </React.Fragment>
    )
}