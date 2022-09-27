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

import  HomeScreen from "./screens/Home"
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
            />

        </Tab.Navigator>
    )
}

export default Screens