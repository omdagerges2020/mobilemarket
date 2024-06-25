import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Link, useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts } from "../reduxsystem/slices/homeProductsSlice";
import Header from "./pageshome/Header";
import LoadingPage from "./LoadingPage";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = () => {
  const { products, loadingHomeProducts, errorHomeProducts } = useSelector(
    (state) => state.homeProducts
  );

  // Dispatching
  const dispatch = useDispatch();

  // Navigation
  const navigate = useNavigation();

  // UseEffect
  useEffect(() => {
    dispatch(getHomeProducts());
  }, []);

  if (loadingHomeProducts) {
    return (
      <View>
        <LoadingPage />
      </View>
    );
  }

  return (
    <ScrollView>
      <Header />
      {/* New collection && slae collection */}
      <View style={tw`px-0 w-full`}>
        <View style={tw`mt-1 w-full flex-row justify-between px-3`}>
          {/*  */}
          <View>
            <Text style={tw`font-bold text-black text-3xl`}>Sale</Text>
            <Text style={tw`text-gray-500`}>You've never seen it before!</Text>
          </View>
          <Link to={{ screen: "Profile", params: { id: "jane" } }}>
            View all
          </Link>
          {/* pics scroll */}
        </View>
        {/* Cards */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-row p-5`}
          styel={tw`w-full h-full`}
        >
          {products.map((prod, index) => (
            <View key={index}>
              <Card onPress={()=> navigate.navigate("SingleProduct", {productId: prod.id, productBrand: prod.brand})} style={tw`mt-5 w-[200px]  px-0 mr-5`}>
                {/* Card image */}
                <Card.Cover source={{ uri: `${prod.thumbnail}` }} />
                <Card.Content style={tw`px-1 mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <FontAwesome name="star" size={18} color={"yellow"} />
                    <FontAwesome name="star" size={18} color={"yellow"} />
                    <FontAwesome name="star" size={18} color={"yellow"} />
                    <FontAwesome name="star" size={18} color={"yellow"} />
                    <FontAwesome name="star" size={18} color={"yellow"} />
                    <Text>({prod.rating})</Text>
                  </View>
                  {/* title */}
                  <Text variant="bodyMedium" style={tw`text-gray-500`}>
                    {prod.title}
                  </Text>
                  {/* Category */}
                  <Text
                    variant="bodyMedium"
                    style={tw`text-black font-bold capitalize`}
                  >
                    {prod.category}
                  </Text>
                  {/* Price */}
                  <View style={tw`flex-row gap-3`}>
                    <Text style={tw`line-through text-red-700`}>
                      {(
                        (prod.discountPercentage / 100) * prod.price +
                        prod.price
                      ).toFixed(2)}
                      $
                    </Text>
                    <Text style={tw`ml-px`}>{prod.price}$</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          ))}
        </ScrollView>

        {/* sale-part */}
        <View style={tw`mt-7 w-full flex-row justify-between px-3`}>
          {/*  */}
          <View>
            <Text style={tw`font-bold text-black text-3xl`}>New</Text>
            <Text style={tw`text-gray-500`}>You've never seen it before!</Text>
          </View>
          <Link to={{ screen: "Profile", params: { id: "jane" } }}>
            View all
          </Link>
          {/* pics scroll */}
        </View>
        {/* Cards */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-row p-5`}
          styel={tw`w-full h-full`}
        >
          {products.map((prod, index) => (
            <View key={index}>
                <Card onPress={()=> navigate.navigate("SingleProduct", {productId: prod.id})} style={tw`mt-5 w-[200px]  px-0 mr-5`}>
                  {/* Card image */}
                  <Card.Cover source={{ uri: `${prod.thumbnail}` }} />
                  <Card.Content style={tw`px-1 mt-2`}>
                    <View style={tw`flex-row gap-2`}>
                      <FontAwesome name="star" size={18} color={"yellow"} />
                      <FontAwesome name="star" size={18} color={"yellow"} />
                      <FontAwesome name="star" size={18} color={"yellow"} />
                      <FontAwesome name="star" size={18} color={"yellow"} />
                      <FontAwesome name="star" size={18} color={"yellow"} />
                      <Text>({prod.rating})</Text>
                    </View>
                    {/* title */}
                    <Text variant="bodyMedium" style={tw`text-gray-500`}>
                      {prod.title}
                    </Text>
                    {/* Category */}
                    <Text
                      variant="bodyMedium"
                      style={tw`text-black font-bold capitalize`}
                    >
                      {prod.category}
                    </Text>
                    {/* Price */}
                    <Text>
                      <Text style={tw`text-red-700`}>Price: </Text>
                      {prod.price}$
                    </Text>
                  </Card.Content>
                </Card>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
