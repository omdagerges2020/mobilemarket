import React from "react";
import Home from "../screens/Home";
import Favourits from "./Favourits/Favourits";
import Bag from "./Bag/Bag";
import Profile from "./Profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Shop from "./Shop/Shop";
import { Link } from "@react-navigation/native";
import tw from "twrnc";
import { EvilIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { Badge } from 'react-native-paper';
import { View } from "react-native";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Maintaps = () => {
  // useselector
  const { bagProducts } = useSelector((state) => state.SingleProd);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name="main-home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Shop Screen */}
      <Tab.Screen
        name="Categories"
        component={Shop}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={30} />
          ),
          headerLeft: () => (
            <Link to={{ screen: "main-home" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          headerRight: () => (
            <Button>
              <EvilIcons name="search" size={24} color="black" />
            </Button>
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Bag Screen */}
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarLabel: "Bag",
          tabBarIcon: ({ color }) => (
            <View>
              <MaterialCommunityIcons name="shopping" color={color} size={30} style={tw`relative`}/>
              <Badge style={tw`absolute left-6 text-white`}>{bagProducts.length}</Badge>
            </View>
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Favourits Screen */}
      <Tab.Screen
        name="Favourits"
        component={Favourits}
        options={{
          headerShown: false,
          tabBarLabel: "Favourits",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Profile Screen */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />
    </Tab.Navigator>
  );
};

export default Maintaps;
