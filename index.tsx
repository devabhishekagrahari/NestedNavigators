import 'react-native-gesture-handler'; // <--- MUST BE THE VERY FIRST LINE
import '@expo/metro-runtime'; 
import { registerRootComponent } from 'expo';

import  App  from './src/App';

registerRootComponent(App);
