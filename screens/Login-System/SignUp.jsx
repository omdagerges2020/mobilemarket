import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Google Image
const googleImage = require("../../assets/Google.png");

// Facebook Image
const facebookImage = require("../../assets/Facebook.png");

const Login = () => {
  const checkreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Navigation
  const navigate = useNavigation();

  // useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // check labels
  const [labelName, setLabelName] = useState(true);
  const [labelEmail, setLabelEmail] = useState(true);
  const [labelPassword, setLabelPassword] = useState(true);

  // Reset all labels to true
  const resetLabels = () => {
    setLabelName(true);
    setLabelEmail(true);
    setLabelPassword(true);
  };

  // Handle Form
  const handleForm = () => {
    // console.log(checkreg.test(email));
    if (name === "" || !isNaN(name) || name.length < 4) {
      setLabelName(false);
    } else if (email === "" || !checkreg.test(email)) {
      resetLabels();
      // setValidName(true)
      setLabelEmail(false);
    } else if (password === "" || password.length < 5) {
      resetLabels();
      setLabelPassword(false);
    } else {
      resetLabels();
      navigate.navigate("Login");
    }
  };

  return (
    <View style={tw`w-full h-full bg-[#f9f9f9] px-3`}>
      <Text style={tw`mt-8 text-3xl font-bold`}>Sign up</Text>
      {/* Start Form */}
      <View style={tw`mt-15 gap-3`}>
        {/* Name Input */}
        <View style={tw`relative`}>
          <TextInput
            underlineColor="transparent"
            style={tw`bg-white py-2 shadow-md`}
            label={labelName ? "Name" : "Enter your name"}
            value={name}
            theme={{
              colors: { onSurfaceVariant: labelName ? "black" : "red" },
            }}
            onChangeText={(name) => setName(name)}
          />
          {name.length > 3 ? (
            <Ionicons
              style={tw`absolute top-5 right-0 px-4`}
              name="checkmark-outline"
              size={24}
              color="#37ae5d"
            />
          ) : (
            ""
          )}
        </View>

        {/* Email Input */}
        <View style={tw`relative`}>
          <TextInput
            underlineColor="transparent"
            style={tw`bg-white py-2 shadow-md`}
            label={labelName ? "Email" : "Enter your email"}
            value={email}
            theme={{
              colors: { onSurfaceVariant: labelEmail ? "black" : "red" },
            }}
            onChangeText={(email) => setEmail(email)}
          />
          {checkreg.test(email) ? (
            <Ionicons
              style={tw`absolute top-5 right-0 px-4`}
              name="checkmark-outline"
              size={24}
              color="#37ae5d"
            />
          ) : (
            ""
          )}
        </View>

        {/* Password Input */}
        <View style={tw`relative`}>
          <TextInput
            underlineColor="transparent"
            style={tw`bg-white py-2 shadow-md`}
            label="Password"
            value={password}
            theme={{
              colors: { onSurfaceVariant: labelPassword ? "black" : "red" },
            }}
            onChangeText={(password) => setPassword(password)}
          />
          {password.length > 4 ? (
            <Ionicons
              style={tw`absolute top-5 right-0 px-4`}
              name="checkmark-outline"
              size={24}
              color="#37ae5d"
            />
          ) : (
            ""
          )}
        </View>
      </View>
      {/* End Form */}

      {/* Link to login */}
      <View style={tw`mt-3`}>
        <View style={tw`flex-row gap-1 items-center justify-end`}>
          <Text style={tw`text-[15px]`}>Already have an account?</Text>
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
          onPress={() => handleForm()}
        >
          SIGN UP
        </Button>
      </View>
      {/* End Submit Button */}

      {/* Start Social */}
      <View style={tw`justify-center items-center mt-[150px]`}>
        <Text>Or sign up with social account</Text>
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
