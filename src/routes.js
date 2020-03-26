import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '~/pages/SingIn';
import Dashboard from '~/pages/Dashboard';
import Helper from '~/pages/Helper';
import Answer from '~/pages/Answer';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Helper,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
                borderTopColor: '#ddd',
              },
            },
          }
        ),
        Screens: createStackNavigator({
          Answer,
        }),
        // navigationOptions: {},
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sing',
      }
    )
  );
