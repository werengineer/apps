import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchInput from "../components/SearchInput";
import { Appbar } from "react-native-paper";
import SearchTabs from "../components/SearchTabs";
import TabViewExample from "../components/SearchTabs";

export default function TabTwoScreen() {
  return (
    <View style={{ marginTop: 60, height: "100%" }}>
      <SearchInput />
      <TabViewExample />
    </View>
  );
}