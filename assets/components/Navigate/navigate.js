import React from 'react';
import RTAGL from './PagesApp/RTAMain/RTAGL'
import RTAREG from './PagesApp/RTARegistr/RTAREG'
import RTARK from './PagesApp/RTAServices/RTARK'
import RTAUR from './PagesApp/RTAVideo/RTAUR'
import RTATL from './PagesApp/RTAKey/RTATL'
import RTASTAT from './PagesApp/RTAStatic/RTASTAT'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='RTAGL'
                    component={RTAGL}
                    options={{ headerShown: false }}
                    />
                <Stack.Screen
                    name='RTASTAT'
                    component={RTASTAT}
                    options={{ headerShown: false }}
                    />
                <Stack.Screen
                    name='RTARK'
                    component={RTARK}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='RTATL'
                    component={RTATL}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='RTAREG'
                    component={RTAREG}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='RTAUR'
                    component={RTAUR}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
   );
};