import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAppSelector } from "@/store/hooks";

export default function ProtectedLayout() {
    const { isAuthenticated, isHydrated } = useAppSelector((state) => state.auth);

    if (!isHydrated) {
        return (
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <ActivityIndicator color="#29473A" />
            </View>
        );
    }

    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}