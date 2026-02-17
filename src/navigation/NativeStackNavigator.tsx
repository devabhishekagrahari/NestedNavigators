import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import RightDrawerScreen from "./DrawerNavigator";

const Stack = createNativeStackNavigator();



export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="Home"
        component={RightDrawerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

//stack -> drawer -> tabs  nesting of navigators

