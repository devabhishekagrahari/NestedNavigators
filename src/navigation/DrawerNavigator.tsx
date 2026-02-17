import * as React from 'react';
import { View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';
import HomeTabs from './BottomTabNavigator';
const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
      <LeftDrawer.Screen name="Home" component={HomeTabs} />
    </LeftDrawer.Navigator>
  );
};

export default function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      swipeEnabled={true}
      swipeMinDistance={20}
      swipeEdgeWidth={100}
      renderDrawerContent={() => <>{/* Right drawer content */}</>}
    >
      <LeftDrawerScreen />
    </Drawer>
  );
}

