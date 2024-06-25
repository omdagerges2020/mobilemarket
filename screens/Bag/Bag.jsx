import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Link, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Bag = () => {
  // useSelector
  const { singlePrdouct, counter, bagProducts } = useSelector(
    (state) => state.SingleProd
  );

  // console.log(bagProducts);

  return (
    <View style={tw`pt-10 w-full h-full px-3 bg-[#f9f9f9]`}>
      <View style={tw`flex-row justify-between items-center w-full`}>
        <Link to={{ screen: "main-home" }} style={tw`pl-2`}>
          <AntDesign name="arrowleft" size={22} color="black" />
        </Link>
        <Button>
          <EvilIcons name="search" size={24} color="black" />
        </Button>
      </View>

      <Text style={tw`font-bold text-2xl mt-4`}>My Bag</Text>

      {bagProducts.map((prod, index) => (
        <View key={index}>
          {/* card */}
          <View style={tw`w-full mt-4 flex-row shadow-md bg-white rounded-lg`}>
            {/* Image container */}
            <View style={tw`w-[30%]`}>
              <Image
                style={tw`w-full h-[130px] bg-gray-200   `}
                source={{
                  uri: prod?.images && prod?.images[0],
                }}
              />
            </View>
            {/* Content container */}
            <View style={tw`w-[70%] px-2 py-2`}>
              {/* text & three-dots icon */}
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`font-bold`}>{prod.brand}</Text>
                <Entypo name="dots-three-vertical" size={20} color="gray" />
              </View>
              {/* color & size */}
              <View style={tw`flex-row gap-4`}>
                <Text>
                  <Text style={tw`text-gray-500`}>Color:</Text> Black
                </Text>
                <Text>
                  <Text style={tw`text-gray-500`}>Size:</Text> L
                </Text>
              </View>
              {/* Buttons & price */}
              <View style={tw`flex-row justify-between items-center mt-5`}>
                {/* Buttons */}
                <View style={tw`flex-row gap-3 items-center`}>
                  <View
                    style={tw`bg-white shadow-lg rounded-full w-[35px] h-[35px] justify-center items-center`}
                  >
                    <AntDesign name="minus" size={24} color="gray" />
                  </View>
                  <Text>{counter}</Text>
                  <View
                    style={tw`bg-white shadow-lg rounded-full w-[35px] h-[35px] justify-center items-center`}
                  >
                    <AntDesign name="plus" size={24} color="gray" />
                  </View>
                </View>
                {/* Price */}
                <Text>{prod.price}$</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Bag;
