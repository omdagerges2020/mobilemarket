import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../reduxsystem/slices/categoryProductsSlice";
import { useNavigation } from "@react-navigation/native";
import LoadingPage from "../LoadingPage";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";

const Categoryname = ({
  route: {
    params: { categoryName },
  },
}) => {
  // console.log(categoryName);
  const { categoryProducts, loadingCategoryProducts } =
    useSelector((state) => state.categoryItems);
  // console.log(categoryProducts);

  // Dispatch
  const dispatch = useDispatch();

  // navigation
  const navigate = useNavigation();

  // useEffect
  useEffect(() => {
    dispatch(getCategoryProducts(categoryName));
    navigate.setOptions({
      title: `${categoryName}'s products`,
    });
  }, []);

  if (loadingCategoryProducts) {
    return <LoadingPage />;
  }

  return (
    <ScrollView>
      <View style={tw`bg-white`}>
        {/* sections part */}
        <View style={tw`w-full bg-white px-4 shadow-lg`}>
          {/* sort & filter & list-display */}
          <View
            style={tw`flex-row w-full justify-between bg-[#f9f9f9] mt-6 p-2 mb-3`}
          >
            {/* filter */}
            <View style={tw`flex-row gap-2`}>
              <Octicons name="filter" size={20} color="black" />
              <Text>Filters</Text>
            </View>
            {/* Price */}
            <View style={tw`flex-row gap-2`}>
              <Ionicons name="swap-vertical-sharp" size={22} color="black" />
              <Text>Price: lowest to hight</Text>
            </View>
            {/* list display */}
            {/* <FontAwesome name="th" size={24} color="black" /> */}
            <FontAwesome name="th-list" size={24} color="black" />
          </View>
        </View>
        {/* Products Cards */}
        <View
          style={tw`w-full px-3 flex-row flex-wrap justify-center gap-4 mb-2`}
        >
          {categoryProducts.map((prod, index) => (
            <View key={index}>
              <Card onPress={()=>navigate.navigate("SingleProduct", {itemsId: prod.id, productBrand: prod.brand})}>
                {/* Card image */}
                <Card.Cover source={{ uri: `${prod.thumbnail}` }} />
                {/* heart icon */}
                <View style={tw`bg-white rounded-full w-[30px] h-[30px] absolute justify-center items-center top-45 left-[150px] shadow-md z-100`}>
                  <EvilIcons name="heart" size={24} color="black" />
                </View>

                <Card.Content style={tw`px-1 py-2 bg-white`}>
                  <View style={tw`flex-row gap-1`}>
                    <FontAwesome name="star" size={16} color={"yellow"} />
                    <FontAwesome name="star" size={16} color={"yellow"} />
                    <FontAwesome name="star" size={16} color={"yellow"} />
                    <FontAwesome name="star" size={16} color={"yellow"} />
                    <FontAwesome name="star" size={16} color={"yellow"} />
                    <Text style={tw`text-gray-500 text-xs	`}>
                      ({prod.rating})
                    </Text>
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
                    {prod.tags[1]}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default Categoryname;
