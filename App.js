import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/containers/Home';
import StargazersList from './app/containers/StargazersList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Stargazers Viewer' }}
        />
        <Stack.Screen
          name="StargazersList"
          component={StargazersList}
          options={{ title: 'Stargazers List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;