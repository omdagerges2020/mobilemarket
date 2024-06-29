import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./reduxsystem/store/store";
import Maintaps from "./screens/Maintaps";
import Shop from "./screens/Shop/Shop";
import Bag from "./screens/Bag/Bag";
import Favourits from "./screens/Favourits/Favourits";
import Profile from "./screens/Profile/Profile";
import Categoryname from "./screens/SingleCategory/Categoryname";
import SingleProduct from "./screens/SingleProduct/SingleProduct";
import { Entypo } from "@expo/vector-icons";
import AllReviews from "./screens/AllReviews/AllReviews";
import Startup from "./screens/StartupHome/Startup";
import SignUp from "./screens/Login-System/SignUp";
import Login from "./screens/Login-System/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Startup">
          <Stack.Screen name="Startup" component={Startup} options={{
            headerShown: false,
          }}/>
          <Stack.Screen
            name="Home"
            component={Maintaps}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen
            name="Bag"
            component={Bag}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Favourits" component={Favourits} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            headerTitle: "",
            headerBackTitleVisible: true,
          }}/>
          <Stack.Screen name="Login" component={Login} options={{
            headerTitle: "",
            headerBackTitleVisible: true,
          }}/>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AllReviews" component={AllReviews} />
          <Stack.Screen name="Categoryname" component={Categoryname} />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={{
              headerRight: () => (
                <Entypo name="share" size={24} color="black" />
              ),
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
