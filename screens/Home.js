import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Post from "../components/Post";
import FloatingButton from "../components/FloatingButton";

export default function TabOneScreen()
{
  return (
    <>
      <ScrollView>
        <Post />
        <Post />
        <Post />
      </ScrollView>
      <FloatingButton />
    </>
  );
}
