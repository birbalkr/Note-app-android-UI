import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ }) => (
                        <MaterialCommunityIcons name="microsoft-onenote" size={24} color="black" />
                    )

                }} />
            <Tabs.Screen
                name="addNotes"
                options={{
                    title: "Add Notes",
                    tabBarIcon: ({ }) => (
                        <AntDesign name="file-add" size={24} color="black" />
                    )
                }} />
            <Tabs.Screen
                name="recycleBin"
                options={{
                    title: "Recycle Bin",
                    tabBarIcon: ({ }) => (
                        <MaterialIcons name="recycling" size={24} color="black" />
                    )
                }} />
        </Tabs>
    )
}