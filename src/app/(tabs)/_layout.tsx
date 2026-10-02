import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="microsoft-onenote"
              size={24}
              color="black"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add-note"
        options={{
          title: "Add-Note",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="note-add" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="recycle-bin"
        options={{
          title: "recycle-bin",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="recycle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
