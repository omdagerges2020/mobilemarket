import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import tw from "twrnc";




const LoadingPage = () => {
  return (
    <View style={tw`justify-center items-center w-full h-full`}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'}/>
    </View>
  );
};

export default LoadingPage;
