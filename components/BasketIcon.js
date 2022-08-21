import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const { amounts, total } = useSelector((state) => state.basket);
  const navigate = useNavigation();
  return (
    <View className="absolute bg-gray-100 bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#0aA296] py-1 px-2">
          {amounts}
        </Text>
        <Text className="flex flex-1 justify-center text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={total} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
