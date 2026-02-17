import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import RootStack from './NativeStackNavigator';
import RightDrawerScreen from './DrawerNavigator';

export default function AppContext() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}