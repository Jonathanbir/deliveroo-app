import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-web";
import DishRow from "../components/DishRow";
import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute bg-gray-100 top-14 left-5 p-2 rounded-full"
        >
          <ArrowLeftIcon size={20} colort="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex flex-row space-x-2 my-1">
            <View className="flex  flex-row space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
              </Text>
            </View>
            <View className="flex flex-row flex-1 space-x-1">
              <LocationMarkerIcon color="green" opacity={0.4} size={22} />
              <Text className="text-green-500">Nearby {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="flex flex-row items-center space-x-2 p-4 border-y border-gray-300"
        >
          <QuestionMarkCircleIcon size={20} colort="#00CCBB" />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
        </TouchableOpacity>

        <View>
          <Text className="px-4 pt-6 text-xl font-bold">Menu</Text>
          {/* DishRow */}
          {dishes.map((dish) => {
            return (
              <DishRow
                key={Math.random()}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
