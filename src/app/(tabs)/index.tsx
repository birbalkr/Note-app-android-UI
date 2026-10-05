import { useResponsive } from "@/hooks/useResponsive";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const noteColors = ["#FDE68A", "#BFDBFE", "#BBF7D0", "#FBCFE8", "#DDD6FE"];

const data = [
  { id: 1, title: "Note 1", description: "This is the first note. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", backgroundColor: noteColors[Math.floor(Math.random() * noteColors.length)] },
  { id: 2, title: "Note 2", description: "This is the second note. This is the first note. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", backgroundColor: noteColors[Math.floor(Math.random() * noteColors.length)] },
  { id: 3, title: "Note 3", description: "This is the third note. This is the first note. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", backgroundColor: noteColors[Math.floor(Math.random() * noteColors.length)] },
  { id: 4, title: "Note 4", description: "This is the fourth note. This is the first note. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.", backgroundColor: noteColors[Math.floor(Math.random() * noteColors.length)] },
]
export default function Index() {
  const { width } = useWindowDimensions();
  const { font18 } = useResponsive();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredNotes = data.filter((item) =>
    `${item.title} ${item.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              backgroundColor: "#FDE68A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="notebook-outline" size={28} color="#713F12" />
          </View>
          <View style={{ marginLeft: 14 }}>
            <Text style={{ fontSize: 28, fontWeight: "700", color: "#171717" }}>
              My notes
            </Text>
            <Text style={{ color: "#737373", marginTop: 3 }}>
              Keep your ideas in one place
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 54,
            backgroundColor: "#FFFFFF",
            borderColor: "#D4D4D4",
            borderWidth: 1,
            borderRadius: 14,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Feather name="search" size={21} color="#737373" />
          <TextInput
            placeholder="Search your notes"
            placeholderTextColor="#A3A3A3"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{ flex: 1, marginLeft: 10, fontSize: 16, color: "#171717" }}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")} accessibilityLabel="Clear search">
              <Feather name="x-circle" size={20} color="#737373" />
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={filteredNotes}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ListHeaderComponent={
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#404040", marginTop: 24, marginBottom: 2 }}>
              Recent notes
            </Text>
          }
          ListEmptyComponent={
            <Text style={{ color: "#737373", textAlign: "center", marginTop: 40 }}>
              No notes found
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/addNotes",
                  params: {
                    noteId: item.id.toString(),
                    noteTitle: item.title,
                    noteDescription: item.description,
                    noteColor: item.backgroundColor,
                  },
                })
              }
              style={{
                width: (width - 50) / 2,
                minHeight: 180,
                backgroundColor: item.backgroundColor,
                borderColor: "#D4D4D4",
                borderWidth: 1,
                borderRadius: 16,
                padding: 14,
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: font18, color: "#171717" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, lineHeight: 21, marginTop: 8, color: "#404040" }}>
                {item.description}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
