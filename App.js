
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const Stack = createStackNavigator();


import Home from "./Views/Home";

const HomeRoute = () =>  <Stack.Screen name="Home" component={Home} />

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'queue-Home' },
    ,
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
  });
  return (
    
    <PaperProvider>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
