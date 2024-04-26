import * as React from 'react';
import
{
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class TabViewExample extends React.Component
{
  state = {
    index: 0,
    routes: [
      { key: 'news', title: 'News' },
      { key: 'posts', title: 'Posts' },
      { key: 'colleges', title: 'Colleges' },
      { key: 'friends', title: 'Friends' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) =>
  {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) =>
        {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity, color: "#fff" }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render()
  {
    return (
      // <View style={{height: "100%"}}> 
        <TabView
          lazy
          navigationState={this.state}
          renderScene={SceneMap({
            news: FirstRoute,
            posts: SecondRoute,
            colleges: FirstRoute,
            friends: SecondRoute,
          })}
          renderTabBar={(props) => <TabBar indicatorStyle={{ backgroundColor: "white" }} style={{ backgroundColor: "black" }} renderLabel={({ route, focused, color }) => (
            <Text style={{ color, margin: 8 }}>
              {route.title}
            </Text>
          )} {...props} />}
          onIndexChange={this._handleIndexChange}
        />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    color: "#fff",
    padding: 16,
  },
});
