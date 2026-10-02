import NotePage from "@/pages/NotePage";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../global.css";

export default function Index() {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        {/* header */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons
            name="microsoft-onenote"
            size={32}
            color="black"
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Note App
          </Text>
        </View>

        {/* search bar */}
        <View
          style={{ flex: 1, backgroundColor: "red", marginHorizontal: 25 }}
          className="flex-row items-center justify-center gap-2 mt-4"
        >
          <TextInput
            className="flex-1  border border-gray-300 rounded-md p-2"
            placeholder="Search items..."
          />
          <Foundation name="page-search" size={24} color="black" />
        </View>

        {/* note list */}
        <NotePage />
      </ScrollView>
    </SafeAreaView>
  );
}
