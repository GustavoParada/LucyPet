import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from './App';
import Hello from './screens/Hello';
import MapScreen from './screens/Map'

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function UserScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="App">
            <Tab.Screen name="App" component={App}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color="#900" />
                    ),
                }} />
            <Tab.Screen name="Photo" component={HomeScreen}
                options={{
                    tabBarLabel: 'Photo',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="camera" size={30} color="#900" />
                    ),
                }} />
            <Tab.Screen name="Map" component={MapScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="map" size={30} color="#900" />
                    ),
                }} />
                 <Tab.Screen name="User" component={Hello}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={30} color="#900" />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default function Tabs() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}