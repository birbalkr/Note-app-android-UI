import { FlatList, Text, View } from "react-native";
import "../../global.css";

type Note = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const notes: Note[] = [
  {
    id: "1",
    title: "React Native",
    description: "Learn components, props, and state.",
    date: "Oct 1, 2026",
  },
  {
    id: "2",
    title: "TypeScript",
    description: "Practice TypeScript concepts.",
    date: "Oct 2, 2026",
  },
  {
    id: "3",
    title: "My Tasks",
    description: "Complete my Note App UI.",
    date: "Oct 2, 2026",
  },
];

export default function NotePage() {
  return (
    <View className="flex-1 p-4">
      <Text className="mb-4 text-xl font-bold">My Notes</Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View className="rounded-xl bg-gray-100 p-4">
            <Text className="text-lg font-bold">{item.title}</Text>

            <Text className="mt-2 text-gray-600">{item.description}</Text>

            <Text className="mt-3 text-xs text-gray-400">{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}
