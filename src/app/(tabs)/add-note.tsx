import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const addnote = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>addnote</Text>
      </View>
    </SafeAreaView>
  );
};

export default addnote;
