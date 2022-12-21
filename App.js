import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Register from './screens/Signup';
import {Provider} from 'react-redux';
import {Text, Button, View} from 'react-native';
import Store from './Redux/Redux';
import Home from './screens/Home';
import Setting from './screens/Setting';
import List from './screens/List';

const Stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            options={{
              header: ({navigation}) => {
                return (
                  <View
                    style={{
                      height: 50,
                      marginRight: 15,
                      marginLeft: 15,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={{fontSize: 18, fontWeight: 'bold'}}>
                      GoBack
                    </Text>
                    <Text
                      onPress={() => {
                        navigation.navigate('List');
                      }}
                      style={{fontSize: 18, fontWeight: 'bold'}}>
                      ListItem
                    </Text>
                  </View>
                  // console.log(navigation);
                );
              },
            }}
            component={BottomTab}
          />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="SignUp" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const BottomTab = () => {
  return (
    <bottomTab.Navigator screenOptions={{headerShown: false}}>
      <bottomTab.Screen name="Home" component={Home} />
      <bottomTab.Screen name="setting" component={Setting} />
    </bottomTab.Navigator>
  );
};

export default App;
