import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Home
import Home from '../../screens/Home';

//Settings
import About from '../../screens/About';


import { ScreenNames } from '../../utils/ScreenNames';
import { Image } from 'react-native';
import { screenOption, tabBarOption } from './constants/options';
import Images from '../../assets/Images/Images';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === ScreenNames.HOME) {
                        iconName = Images.home;
                    } else if (route.name === ScreenNames.ABOUT) {
                        iconName = Images.about;
                    }
                    return <Image source={iconName}
                        style={{ height: size, width: size, resizeMode: 'contain', tintColor: `${color}` }}
                    />;
                },
            })}
            backBehavior='none'
            tabBarOptions={tabBarOption}
        >
            <Tab.Screen name={ScreenNames.HOME} component={Home} />
            <Tab.Screen name={ScreenNames.ABOUT} component={About} />
        </Tab.Navigator>
    );
};

export const App = () => {
    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName={ScreenNames.HOME}
            screenOptions={screenOption}
        >
            <Stack.Screen name={ScreenNames.HOME} component={TabStack} />
        </Stack.Navigator>
    );
}