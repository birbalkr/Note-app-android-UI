import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';


const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="microsoft-onenote" size={24} color="black" />
                    )
                }}
            />

            <Tabs.Screen
                name="addNote"
                options={{
                    title: 'Notes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" size={24} color="black" />
                    )
                }}
            />

            <Tabs.Screen
                name="recycleBin"
                options={{
                    title: 'Recycle Bin',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="delete" size={24} color="black" />
                    )
                }}
            />

        </Tabs>
    )
}

export default TabLayout