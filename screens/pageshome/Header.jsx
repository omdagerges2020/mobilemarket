import { View, Image, Text } from "react-native";
import React from "react";
const imgBg = require("../../assets/main.png");
import tw from "twrnc";
import { Button } from "react-native-paper";

const Header = () => {
  return (
   
      <View>
        <Image source={imgBg} style={tw`w-full`} />
        <View style={tw`absolute top-[40%] right-[50%]`}>
          <Text style={tw`text-white font-bold text-[50px]`}>Fashion</Text>
          <Text style={tw`text-white font-bold text-[50px]`}>sale</Text>
          <Button
            style={tw`w-[70%]`}
            buttonColor="red"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Check
          </Button>
        </View>
      </View>

  );
};

export default Header;
