import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import React from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch } from "react-redux";
import { increaseBasket } from "../features/basketSlice";

const DishRow = ({ id, name, description, price, amount, image }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity className={`bg-white border p-4 border-gray-200 `}>
        <View className="flex flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: image }}
            className="w-20 h-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>
      <View className="bg-white px-4">
        <View className="flex flex-row items-center space-x-2 pb-3">
          <TouchableOpacity>
            <MinusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(increaseBasket({ id }));
            }}
          >
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DishRow;
