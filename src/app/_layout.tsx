import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "@/store/AuthProvider";

export default function RootLayout() {
    return (
        <AuthProvider>
            <React.Fragment>
                <StatusBar style="auto" />
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                </Stack>
            </React.Fragment>
        </AuthProvider>
    );
}