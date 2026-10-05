import { useResponsive } from "@/hooks/useResponsive";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
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
  const {font18, font5 } = useResponsive();
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <SafeAreaView>
      <View style={{}}>
        {isMobile && (
          <View >
            {/* Header  */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <MaterialCommunityIcons name="microsoft-onenote" size={45} color="black" />
              <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: 10 }}>
                NOTE APP
              </Text>
            </View>

            {/* Search  */}
            <View style={{ borderColor: "gray", borderWidth: 1, borderRadius: 15, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginHorizontal: 20 }}>
              <TextInput
                placeholder="search......."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity
                onPress={() => {
                  console.log("search:", searchQuery);

                }}
              >
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={data}
              numColumns={2}
              contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
              renderItem={({ item }) => (
                <View style={{ width: (width - 50) / 2, minHeight: 180, backgroundColor: item.backgroundColor, borderColor: "gray", borderWidth: 1, borderRadius: 15, paddingHorizontal: 10, justifyContent: "space-between", alignItems: "flex-start", marginTop: 20, marginHorizontal: 5, paddingVertical: 10 }}>
                  <Text style={{ fontWeight: "bold", fontSize: font18 }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: font18, marginTop: 5 }}>
                    {item.description}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}

        {
          isTablet && (
            <View  >
              <Text  >
                Tablet Layout
              </Text>
            </View>
          )
        }

        {
          isDesktop && (
            <View  >
              <Text>
                Desktop Layout
              </Text>
            </View>
          )
        }
      </View >
    </SafeAreaView>
  );
}
