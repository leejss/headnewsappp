import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./screens/Detail";
import { NewsProvider } from "./contexts/NewContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen name="News" component={Home} />
          <Stack.Screen name="Article" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
}
