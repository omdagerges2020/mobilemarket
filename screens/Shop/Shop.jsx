import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { getCategories } from "../../reduxsystem/slices/CategoriesSlice";
import { useNavigation } from "@react-navigation/native";


const Products = () => {
  const { categories } = useSelector((state) => state.allCategories);

  const navigate = useNavigation();

  // Disoatching
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <ScrollView>
      <View style={tw`mt-4 w-full h-full`}>
        {/* View Items Button */}
        <View style={tw`px-3`}>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={tw`bg-red-600 py-2 rounded-full`}
          >
            VIEW ALL ITEMS
          </Button>
          <Text style={tw`mt-4 text-gray-500 text-lg`}>Choose category</Text>
        </View>

        {/* categories names */}
        {categories.map((categoryObj, index) => (
          <View key={index}>
            <View style={tw`mt-5 border-b-[.3px] border-gray-300	`}>
              <View style={tw`px-[40px] pb-5`}>
                <Text onPress={()=>navigate.navigate("Categoryname", {categoryName: categoryObj.slug})}>{categoryObj.name}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Products;
