import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { setBasket } from "../features/basketSlice";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
        dispatch(setBasket(dishes));
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">
              {rating}
              {genre}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
