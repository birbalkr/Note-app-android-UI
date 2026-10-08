import { Link } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    <Text style={styles.title}>Create account</Text>
                    <Text style={styles.subtitle}>Start organizing your notes today.</Text>

                    <Text style={styles.label}>Username</Text>
                    <TextInput value={username} onChangeText={setUsername} placeholder="Choose a username" placeholderTextColor="#A3A3A3" autoCapitalize="none" style={styles.input} />
                    <Text style={styles.label}>Name</Text>
                    <TextInput value={name} onChangeText={setName} placeholder="Your name" placeholderTextColor="#A3A3A3" style={styles.input} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput value={email} onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor="#A3A3A3" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.input} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput value={password} onChangeText={setPassword} placeholder="Create a password" placeholderTextColor="#A3A3A3" secureTextEntry style={styles.input} />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <Link href="/login" style={styles.link}>Log in</Link>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#F8F8F8" },
    flex: { flex: 1 },
    container: { flexGrow: 1, justifyContent: "center", padding: 24 },
    title: { fontSize: 30, fontWeight: "700", color: "#171717" },
    subtitle: { color: "#737373", marginTop: 8, marginBottom: 34 },
    label: { color: "#404040", fontWeight: "600", marginBottom: 8 },
    input: { height: 55, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 15, paddingHorizontal: 16, fontSize: 16, color: "#171717", marginBottom: 20 },
    button: { height: 55, marginTop: 10, borderRadius: 15, backgroundColor: "#171717", justifyContent: "center", alignItems: "center" },
    buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
    footer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
    footerText: { color: "#737373" },
    link: { color: "#171717", fontWeight: "700" },
});