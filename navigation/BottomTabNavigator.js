// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../constants/Colors";
import { CommonActions } from '@react-navigation/native';
import { Text, BottomNavigation, Badge } from 'react-native-paper';
import TabOneScreen from "../screens/Home";
import TabTwoScreen from "../screens/Search";
import { Header } from "../components/Header";
import SearchInput from "../components/SearchInput";
import { View } from "../components/Themed";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator()
{
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{ backgroundColor: '#000' }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) =>
          {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
          {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color: 'white', size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) =>
          {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <BottomTab.Screen
        name="home"
        component={TabOneNavigator}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
          {
            return <Icon  name="home" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="search"
        component={TabTwoNavigator}
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
          {
            return <Icon name="magnify" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={TabThreeNavigator}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
          {
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="menu"
        component={TabFourNavigator}
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
          {
            return <Icon name="menu" size={size} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props)
{
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator()
{
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="home"
        component={TabOneScreen}
        options={{ headerTitle: "Home" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator()
{
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="search"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator()
{
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="profile"
        component={TabTwoScreen}
        options={{ headerTitle: "Profile" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator()
{
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="menu"
        component={TabTwoScreen}
        options={{ headerTitle: "Menu" }}
      />
    </TabFourStack.Navigator>
  );
}

