import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {
    Home,
    HomeFilled,
    Search,
    SearchFilled,
    Reel,
    ReelFilled,
    Shop,
    ShopFilled,
} from "./icons";

import  HomeScreen from "./screens/home"
import  SearchScreen from "./screens/Search"
import  ReelScreen from "./screens/Reel"
import  ShopScreen from "./screens/Shop"
import  ProfileScreen from "./screens/Profile"



function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTinColor: '#000',
                tabBarInactiveTintColor: '#000',
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused, color }) => {
                        if (focused)
                            return <HomeFilled size={30} fill={color} />

                        return <Home size={30} fill={color} />
                    }


                }}
            />
            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused, color }) => {
                        if (focused)
                            return <SearchFilled size={30} fill={color} />

                        return <Search size={30} fill={color} />
                    }


                }}
            />
            <Tab.Screen
                name="reel"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({focused, color }) => {
                        if (focused)
                            return <ReelFilled size={30} fill={color} />

                        return <Reel size={30} fill={color} />
                    }


                }}
            />
            <Tab.Screen
                name="shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({focused, color }) => {
                        if (focused)
                            return <ShopFilled size={30} fill={color} />

                        return <Shop size={30} fill={color} />
                    }


                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            style={[styles.avatar, {
                                borderColor: focused ? '#000' : 'transparent'
                            }]}
                            source={{
                                uri: 'https://miro.medium.com/max/640/1*UNf6kxqv_ujIjKoMI0q97A.png'
                            }}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Screens

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 21,
        borderWidth: 1,
    }
})