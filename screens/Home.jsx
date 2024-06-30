import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Link, useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts } from "../reduxsystem/slices/homeProductsSlice";
import Header from "./pageshome/Header";
import LoadingPage from "./LoadingPage";
import { AntDesign } from "@expo/vector-icons";

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
            <Text style={tw`font-bold text-black text-3xl`}>New</Text>
            <Text style={tw`text-gray-500`}>You've never seen it before!</Text>
          </View>
          <Link to={{ screen: "Shop" }}>View all</Link>
          {/* pics scroll */}
        </View>
        {/* Cards */}
        <View style={tw`mb-11 w-full flex-row flex-wrap mt-2 justify-center gap-6`}>
          {/* <ScrollView> */}
          {products.map((data, index) => (
            <View key={index}>
              <Card style={tw`w-40  h-80  mb-5 mt-4 `}>
                <View style={tw`relative `}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate.navigate("SingleProduct", {
                        itemsId: data.id,
                        productBrand: data.brand,
                      })
                    }
                  >
                    <Card.Cover
                      style={tw`p-3`}
                      source={{ uri: data.images[0] }}
                    />
                  </TouchableOpacity>
                  <View style={tw``}>
                    <View
                      style={tw`bg-white absolute right-0 bottom-[-5]  w-10 h-10 flex justify-center items-center rounded-full`}
                    >
                      <AntDesign name="hearto" size={20} />
                    </View>
                  </View>
                </View>
                <View style={tw`mx-2 my-3`}>
                  <View style={tw`flex-row`}>
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={18}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={18}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={18}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={18}
                      ssw
                      color="gold"
                    />

                    <Text style={tw`mt-1`}>({data.rating})</Text>
                  </View>
                  <Text style={tw`text-gray-400 font-bold text-xs`}>
                    {data.title}
                  </Text>
                  <Text style={tw`font-bold text-lg`}>{data.category}</Text>
                  <View style={tw`flex-row`}>
                    <Text style={tw`line-through text-gray-400 font-bold`}>
                      {data.price}$
                    </Text>
                    <Text style={tw` text-red-600 font-bold`}>
                      {data.discountPercentage}$
                    </Text>
                  </View>
                </View>
              </Card>
            </View>
          ))}
          {/* </ScrollView> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
