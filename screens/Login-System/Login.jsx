import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Google Image
const googleImage = require("../../assets/Google.png");

// Facebook Image
const facebookImage = require("../../assets/Facebook.png");

const Login = () => {
  // useState
  const [name, setName] = useState("");
  const [email, setEmaail] = useState("");
  const [password, setPassword] = useState("");

  // Navigation
  const navigate = useNavigation();
  return (
    <View style={tw`w-full h-full bg-[#f9f9f9] px-3`}>
      <Text style={tw`mt-8 text-3xl font-bold`}>Login</Text>
      {/* Start Form */}
      <View style={tw`mt-15 gap-3`}>
        {/* Email Input */}
        <TextInput
          underlineColor="transparent"
          style={tw`bg-white py-2 shadow-md`}
          label="Email"
          value={email}
          onChangeText={(email) => setText(email)}
          right={<Ionicons name="checkmark" size={24} color="green" />}
        />
        {/* Password Input */}
        <TextInput
          underlineColor="transparent"
          style={tw`bg-white py-2 shadow-md`}
          label="Password"
          value={password}
          onChangeText={(password) => setText(password)}
          right={<Ionicons name="checkmark" size={24} color="green" />}
        />
      </View>
      {/* End Form */}

      {/* Link to login */}
      <View style={tw`mt-3`}>
        <View style={tw`flex-row gap-1 items-center justify-end`}>
          <Text style={tw`text-[15px]`}>Forget your password?</Text>
          <Entypo
            onPress={() => navigate.navigate("Login")}
            name="arrow-long-right"
            size={20}
            color="red"
          />
        </View>
      </View>

      {/* Start Submit Button */}
      <View style={tw`mt-6`}>
        <Button
          mode="contained"
          style={tw`bg-[#DB3022] py-1 rounded-full shadow-xl`}
          onPress={() => navigate.navigate("Home")}
        >
          LOGIN
        </Button>
      </View>
      {/* End Submit Button */}

      {/* Start Social */}
      <View style={tw`justify-center items-center mt-[150px]`}>
        <Text>Or login with social account</Text>
        <View style={tw`flex-row`}>
          {/* Google Icon */}
          <Image source={googleImage} />
          {/* Facebook Icon */}
          <Image source={facebookImage} />
        </View>
      </View>
      {/* End Social */}
    </View>
  );
};

export default Login;
