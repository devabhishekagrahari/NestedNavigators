import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../screens/Feed";
import MessagesScreen from "../screens/Messages";

const Tab = createBottomTabNavigator();
export default function HomeTabs() {
  return (
    <Tab.Navigator  screenOptions={{headerShown:false}}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}