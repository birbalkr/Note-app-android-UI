import { login } from "@/store/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function LoginScreen() {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = () => {
        const trimmedEmail = email.trim();

        if (!trimmedEmail || !password) {
            setError("Enter your email and password to continue.");
            return;
        }

        dispatch(login({ email: trimmedEmail }));
        router.replace("/");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.screen}
        >
            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.brandRow}>
                    <View style={styles.logo}>
                        <Ionicons name="document-text" size={25} color="#FFFDF7" />
                    </View>
                    <Text style={styles.brandName}>memento</Text>
                </View>

                <View style={styles.heading}>
                    <Text style={styles.title}>Welcome back</Text>
                    <Text style={styles.subtitle}>
                        Your thoughts are waiting for you.
                    </Text>
                </View>

                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={19} color="#899188" />
                    <TextInput
                        autoCapitalize="none"
                        autoComplete="email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        placeholder="you@example.com"
                        placeholderTextColor="#A7ADA4"
                        style={styles.input}
                        value={email}
                    />
                </View>

                <Text style={[styles.label, styles.passwordLabel]}>PASSWORD</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={19} color="#899188" />
                    <TextInput
                        autoCapitalize="none"
                        autoComplete="password"
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        placeholderTextColor="#A7ADA4"
                        secureTextEntry={!showPassword}
                        style={styles.input}
                        value={password}
                    />
                    <Pressable
                        accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                        hitSlop={10}
                        onPress={() => setShowPassword((visible) => !visible)}
                    >
                        <Ionicons
                            name={showPassword ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color="#899188"
                        />
                    </Pressable>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <Pressable
                    onPress={handleLogin}
                    style={({ pressed }) => [styles.signInButton, pressed && styles.pressed]}
                >
                    <Text style={styles.signInText}>Sign in</Text>
                    <Ionicons name="arrow-forward" size={19} color="#FFFDF7" />
                </Pressable>

                <Text style={styles.helperText}>
                    This simple demo saves your login on this device.
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    safeArea: { backgroundColor: "#F8F7F3", flex: 1 },
    screen: { flex: 1 },
    content: { flexGrow: 1, padding: 25, paddingTop: 32 },
    brandRow: { alignItems: "center", flexDirection: "row", gap: 10 },
    logo: {
        alignItems: "center",
        backgroundColor: "#29473A",
        borderRadius: 14,
        height: 48,
        justifyContent: "center",
        width: 48,
    },
    brandName: { color: "#29473A", fontSize: 22, fontWeight: "800" },
    heading: { marginBottom: 38, marginTop: 61 },
    title: { color: "#252A24", fontSize: 32, fontWeight: "800" },
    subtitle: { color: "#7D8179", fontSize: 15, marginTop: 9 },
    label: {
        color: "#737A70",
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1.3,
        marginBottom: 9,
    },
    passwordLabel: { marginTop: 22 },
    inputContainer: {
        alignItems: "center",
        backgroundColor: "#FFFDF9",
        borderColor: "#E5E5DE",
        borderRadius: 13,
        borderWidth: 1,
        flexDirection: "row",
        height: 56,
        paddingHorizontal: 16,
    },
    input: { color: "#30372F", flex: 1, fontSize: 15, marginLeft: 11 },
    signInButton: {
        alignItems: "center",
        backgroundColor: "#29473A",
        borderRadius: 14,
        flexDirection: "row",
        height: 57,
        justifyContent: "center",
        marginTop: 28,
    },
    signInText: { color: "#FFFDF7", fontSize: 15, fontWeight: "800", marginRight: 11 },
    pressed: { opacity: 0.78 },
    errorText: { color: "#B34A3C", fontSize: 12, marginTop: 14, textAlign: "center" },
    helperText: { color: "#8B9088", fontSize: 12, marginTop: 26, textAlign: "center" },
});