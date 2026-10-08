import { Tabs } from "expo-router";

export default function TabLayout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="add-note" options={{ title: "Add Note" }} />
    </Tabs>
}