import 'react-native-gesture-handler'; // MUST BE LINE 1
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

// Import the Drawer logic we fixed earlier
import AppContext from './navigation/navigation'; 

// Keep the splash screen visible until the app is ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  // Handle splash screen hiding once the UI is mounted
  React.useEffect(() => {
    const prepare = async () => {
      try {
        // You can re-enable Asset.loadAsync here if needed later
        await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for stability
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  return (
    <SafeAreaProvider>
        <AppContext />
    </SafeAreaProvider>
  );
}
