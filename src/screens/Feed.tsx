import { Button } from "@react-navigation/elements";
import {  Text, View } from "react-native";

export default function FeedScreen(navigation:any) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}
