import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, getSingleProduct } from "../../reduxsystem/slices/SingleProductSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import LoadingPage from "../LoadingPage";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";


const SingleProduct = () => {
  // useSelector
  const { singlePrdouct, loadingSingleProduct } =
    useSelector((state) => state.SingleProd);

    // console.log(singlePrdouct);

  // useRoute
  const {
    params: { itemsId, productBrand},
  } = useRoute();
  console.log(productBrand);

  // Dispatching
  const dispatch = useDispatch();

  // Navigation
  const navigate = useNavigation();


  // useEffect
  useEffect(() => {
    dispatch(getSingleProduct(itemsId));
    navigate.setOptions({
      title: `${productBrand}`,
    });
  }, []);

  if (loadingSingleProduct) {
    return <LoadingPage />;
  }

  return (
    <View>
      <ScrollView>
        <View>
          {/* Image */}
          <View>
            <Image
              style={tw`w-full h-100 bg-gray-200   `}
              source={{
                uri: singlePrdouct?.images && singlePrdouct?.images[0],
              }}
            />
          </View>
          {/* title & category */}
          <View style={tw` ml-2`}>
            <Text style={tw`mt-3 text-2xl font-bold`}>
              {singlePrdouct?.title}
            </Text>

            <View style={tw`mr-2 flex-row justify-between`}>
              <View>
                {/* category */}
                <Text style={tw`mt-2 text-gray-400 font-bold text-xs`}>
                  {singlePrdouct?.category}
                </Text>
                {/* stars */}
                <View style={tw`flex-row mt-1`}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={16}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={16}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={16}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={16}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={16}
                    ssw
                    color="gold"
                  />
                  <Text style={tw` text-xs text-gray-400`}>(10)</Text>
                </View>
              </View>
              {/* price */}
              <Text style={tw`text-xl font-bold mt-2 mr-2`}>
                ${singlePrdouct?.price}
              </Text>
            </View>
            {/* description */}
            <Text style={tw`mt-2 text-lg mr-2`}>
              {singlePrdouct?.description}
            </Text>

            {/* reviews */}
            <View>
              <View style={tw`flex-row justify-between mr-3`}>
                <Text style={tw`text-xl font-bold my-2 ml-2 `}>reviews</Text>
                <Text
                  style={tw`mt-3 font-bold underline`}
                  onPress={() =>
                    navigate.navigate("AllReviews", singlePrdouct)
                  }
                >
                  {" "}
                  View All
                </Text>
              </View>
              <View style={tw`bg-white mx-3 mr-5 p-5`}>
                <Text style={tw`font-bold text-lg`}>
                  {singlePrdouct.reviews[0].reviewerName}
                </Text>
                <View style={tw`flex-row justify-between `}>
                  <View style={tw`flex-row`}>
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={14}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={14}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={14}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw`mt-1`}
                      size={14}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="staro"
                      style={tw`mt-1`}
                      size={14}
                      ssw
                      color="gray"
                    />
                  </View>
                  <Text>{singlePrdouct.reviews[0].date.slice(0, 10)}</Text>
                </View>
                <Text style={tw`mt-2 text-gray-600`}>
                  {singlePrdouct.reviews[0].reviewerEmail}
                </Text>
                <Text style={tw`mt-2 text-gray-700 font-bold`}>
                  {singlePrdouct.reviews[0].comment}
                </Text>
                <View style={tw`flex-row justify-end`}>
                  <Text style={tw`mt-1 mr-1 text-gray-500 font-bold`}>
                    Helpful
                  </Text>
                  <AntDesign name="like2" size={20} color="gray" />
                </View>
              </View>
            </View>
            {/* Button add to cart */}
              <Button
                style={tw`bg-red-700 mt-7 mb-5 mx-4`}
                mode="contained"
                onPress={() => dispatch(addToBag(singlePrdouct))}
              >
                ADD TOO CART
              </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleProduct;
