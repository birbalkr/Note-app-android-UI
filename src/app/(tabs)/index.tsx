import { Authcontext } from '@/utils/authContext'
import { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
    const authcontext = useContext(Authcontext)
    return (
        <SafeAreaView>
            <View>
                <Text>Index</Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={authcontext.logOut}>
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#F8F8F8" },
    flex: { flex: 1 },
    container: { flexGrow: 1, justifyContent: "center", padding: 24 },
    title: { fontSize: 30, fontWeight: "700", color: "#171717" },
    subtitle: { color: "#737373", marginTop: 8, marginBottom: 34 },
    label: { color: "#404040", fontWeight: "600", marginBottom: 8 },
    input: {
        height: 55,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRadius: 15,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#171717",
        marginBottom: 20,
    },
    button: {
        height: 55,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: "#171717",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
    footer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
    footerText: { color: "#737373" },
    link: { color: "#171717", fontWeight: "700" },
});


export default Index