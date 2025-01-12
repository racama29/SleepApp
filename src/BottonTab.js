import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reflujo from './reflujo';
import Acidez from './acidez';
import Estreñimiento from './estreñimiento';
import Diarrea from './diarrea';
import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Reflujo" component={Reflujo} options={{
        // headerShown: false, si quisiera ocultar el header
        tabBarIcon: ({focused})  => (
            <View>
                <Image 
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: focused ? '#0080ff' : '#3c3c3c',
                    }}
                />
            </View>
        ),
        }}/>
        <Tab.Screen name="Acidez" component={Acidez} options={{
        // headerShown: false, si quisiera ocultar el header
        tabBarIcon: ({focused})  => (
            <View>
                <Image 
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: focused ? '#0080ff' : '#3c3c3c',
                    }}
                />
            </View>
        ),
        }}/> 
        <Tab.Screen name="Estreñimiento" component={Estreñimiento} options={{
        // headerShown: false, si quisiera ocultar el header
        tabBarIcon: ({focused})  => (
            <View>
                <Image 
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: focused ? '#0080ff' : '#3c3c3c',
                    }}
                />
            </View>
        ),
        }}/>
        <Tab.Screen name="Diarrea" component={Diarrea} options={{
        // headerShown: false, si quisiera ocultar el header
        tabBarIcon: ({focused})  => (
            <View>
                <Image 
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: focused ? '#0080ff' : '#3c3c3c',
                    }}
                />
            </View>
        ),
        }}/> 
    </Tab.Navigator>
  );
}

export default MyTabs;