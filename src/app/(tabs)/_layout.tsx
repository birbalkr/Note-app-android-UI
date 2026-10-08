import { Authcontext } from "@/utils/authContext";
import { Redirect, Tabs } from "expo-router";
import { useContext } from "react";

export default function TabLayout() {
    const authState = useContext(Authcontext)
    
    if (!authState.isLoging) {
        return <Redirect href="/login" />
    }
    return <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="add-note" options={{ title: "Add Note" }} />
    </Tabs>
}