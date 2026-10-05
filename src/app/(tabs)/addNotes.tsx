import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const noteColors = ["#FDE68A", "#BFDBFE", "#BBF7D0", "#FBCFE8", "#DDD6FE"];

export default function AddNotes() {
    const { noteId, noteTitle, noteDescription, noteColor } =
        useLocalSearchParams<{
            noteId?: string;
            noteTitle?: string;
            noteDescription?: string;
            noteColor?: string;
        }>();
        const isEditing = Boolean(noteId);
        const [title, setTitle] = useState(isEditing ? noteTitle ?? "" : "");
        const [content, setContent] = useState(isEditing ? noteDescription ?? "" : "");
        const [selectedColor, setSelectedColor] = useState(
            isEditing && noteColor && noteColors.includes(noteColor) ? noteColor : noteColors[0]
        );
        const [saved, setSaved] = useState(false);
        const canSave = title.trim().length > 0 && content.trim().length > 0;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={{ padding: 20, paddingBottom: 36 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 28 }}>
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
                            <MaterialCommunityIcons
                                name={isEditing ? "note-edit-outline" : "note-plus-outline"}
                                size={28}
                                color="#713F12"
                            />
                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text style={{ fontSize: 28, fontWeight: "700", color: "#171717" }}>
                                {isEditing ? "Edit note" : "Add note"}
                            </Text>
                            <Text style={{ color: "#737373", marginTop: 3 }}>
                                {isEditing ? "Update your note" : "Capture an idea before it slips away"}
                            </Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#404040", marginBottom: 8 }}>
                        Title
                    </Text>
                    <TextInput
                        value={title}
                        onChangeText={(value) => {
                            setTitle(value);
                            setSaved(false);
                        }}
                        placeholder="Give your note a title"
                        placeholderTextColor="#A3A3A3"
                        maxLength={80}
                        returnKeyType="next"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#D4D4D4",
                            borderWidth: 1,
                            borderRadius: 14,
                            paddingHorizontal: 16,
                            height: 54,
                            fontSize: 16,
                            color: "#171717",
                            marginBottom: 22,
                        }}
                    />

                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#404040", marginBottom: 8 }}>
                        Note
                    </Text>
                    <TextInput
                        value={content}
                        onChangeText={(value) => {
                            setContent(value);
                            setSaved(false);
                        }}
                        placeholder="Write your thoughts here..."
                        placeholderTextColor="#A3A3A3"
                        multiline
                        textAlignVertical="top"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#D4D4D4",
                            borderWidth: 1,
                            borderRadius: 14,
                            padding: 16,
                            minHeight: 190,
                            fontSize: 16,
                            lineHeight: 24,
                            color: "#171717",
                        }}
                    />

                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#404040", marginTop: 24, marginBottom: 12 }}>
                        Note color
                    </Text>
                    <View style={{ flexDirection: "row", gap: 14 }}>
                        {noteColors.map((color) => (
                            <TouchableOpacity
                                key={color}
                                accessibilityLabel={`Select ${color} note color`}
                                onPress={() => setSelectedColor(color)}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: color,
                                    borderWidth: selectedColor === color ? 3 : 1,
                                    borderColor: selectedColor === color ? "#171717" : "#D4D4D4",
                                }}
                            />
                        ))}
                    </View>

                    <TouchableOpacity
                        disabled={!canSave || saved}
                        onPress={() => {
                            setSaved(true);
                            if (isEditing) {
                                router.back();
                            }
                        }}
                        style={{
                            height: 54,
                            borderRadius: 14,
                            backgroundColor: canSave && !saved ? "#171717" : "#D4D4D4",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 34,
                        }}
                    >
                        <Text style={{ color: canSave && !saved ? "#FFFFFF" : "#737373", fontSize: 16, fontWeight: "700" }}>
                            {saved ? (isEditing ? "Note updated" : "Note saved") : isEditing ? "Update note" : "Save note"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}