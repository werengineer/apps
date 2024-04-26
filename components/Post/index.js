import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Post = () => (
  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button onLongPress={() => {alert("hello")}}>Cancel</Button>
      <Button onPress={() => {alert("hello")}}>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
  }
});

export default Post;

