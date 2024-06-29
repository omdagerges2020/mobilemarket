import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Start up Image
const startupImage = require("../../assets/startupImage.png");

const Startup = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={startupImage} style={styles.image}>
        <Button onPress={()=>navigate.navigate("SignUp")} style={tw`bg-red-700 text-white p-3 opacity-50`} mode="contained"><Text style={tw`text-xl`}>Get Started</Text></Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: "end",
    },
  });

export default Startup;
