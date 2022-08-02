import * as React from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';
import Splash from "./src/screens/Splash/Splash";
import Board from "./src/screens/Board/Board";
import MetaDetails from "./src/screens/MetaDetails/MetaDetails";

const Stack = createNativeStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Inter_100Thin,
          Inter_200ExtraLight,
          Inter_300Light,
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_700Bold,
          Inter_800ExtraBold,
          Inter_900Black,
        });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = React.useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="MetaDetails" component={MetaDetails} />
      </Stack.Navigator>
      <View onLayout={onLayout}></View>
    </NavigationContainer>
  );
}

export default App;
