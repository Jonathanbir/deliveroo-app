import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigate = useNavigation();
  return (
    <View className="absolute bg-gray-100 bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] border p-4 rounde-lg flex-row">
        <Text>View Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
