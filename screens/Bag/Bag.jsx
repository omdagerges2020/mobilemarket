import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@react-navigation/native";
const imgBg = require("../../assets/empty-shopping.jpg");
import {
  decrement,
  deleteItem,
  increment,
} from "../../reduxsystem/slices/SingleProductSlice";
import { AntDesign } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const Bag = () => {
  // useSelector
  const { bagProducts } = useSelector((state) => state.SingleProd);

  // Dispatching
  const dispatch = useDispatch();

  // const [visibleId, setVisibleId] = useState(null);

  // const showDialog = (id) => {
  //   setVisibleId(id);
  // };

  // const handleCancel = () => {
  //   setVisibleId(null);
  // };

  // const handleDelete = (prod) => {
  //   dispatch(deleteItem(prod))
  //   setVisibleId(null);
  // };

  return (
    <ScrollView>
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

        {bagProducts.length > 0 ? (
          bagProducts.map((prod, index) => (
            <View key={index}>
              {/* card */}
              <View
                style={tw`w-full mt-4 flex-row shadow-md bg-white rounded-lg`}
              >
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
                    {/* Delete & favourits icons */}
                    <View
                      style={tw`justify-center items-center gap-2 flex-row`}
                    >
                      <AntDesign
                        onPress={() => dispatch(deleteItem(prod))}
                        name="delete"
                        size={24}
                        color="black"
                      />
                      {/* Start Alert dialog */}
                      {/* <Dialog.Container visible={visibleId === prod.id}>
                        <Dialog.Title>Product delete</Dialog.Title>
                        <Dialog.Description>
                          Do you want to delete this Product? You cannot undo
                          this action.
                        </Dialog.Description>
                        <Dialog.Button
                          label="Cancel"
                          onPress={() => handleCancel()}
                        />
                        <Dialog.Button
                          label="Delete"
                          onPress={() => handleDelete(prod)}
                        />
                      </Dialog.Container> */}
                      {/* End Alert dialog */}
                      <EvilIcons name="heart" size={30} color="black" />
                    </View>
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
                        <AntDesign
                          onPress={() => dispatch(decrement(prod))}
                          name="minus"
                          size={24}
                          color="gray"
                        />
                      </View>
                      <Text>{prod.itemsCount}</Text>
                      <View
                        style={tw`bg-white shadow-lg rounded-full w-[35px] h-[35px] justify-center items-center`}
                      >
                        <AntDesign
                          onPress={() => dispatch(increment(prod))}
                          name="plus"
                          size={24}
                          color="gray"
                        />
                      </View>
                    </View>
                    {/* Price */}
                    <Text>{(prod?.price * prod?.itemsCount).toFixed(2)}$</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={tw`justify-center items-center mt-5 w-full bg-white`}>
            <Image source={imgBg} style={tw`w-[200px] h-[200px]`} />
          </View>
        )}
        {/* Total Amount */}
        <View style={tw`flex-row justify-between items-center mt-6`}>
          <Text style={tw`text-[18px] text-gray-500`}>Total amount:</Text>
          <Text style={tw`text-[18px] font-bold`}>
            {bagProducts.length > 0 &&
              bagProducts
                .map((prod) => prod?.price * prod?.itemsCount)
                .reduce((x, y) => x + y)
                .toFixed(2)}
          </Text>
        </View>
        {/* Checkout Button */}
        <View style={tw`mt-6`}>
          <Button textColor="white" style={tw`bg-red-600 p-1 rounded-full`}>
            CHECK OUT
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bag;
