import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { removeFromBasket, selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const { amounts, total } = useSelector((state) => state.basket);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const gropedItems = items.reduce((results, items) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    });

    setGroupedItemsInBasket(gropedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <View className="flex flex-1 bg-gray-100">
        <View className="p-4 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">In-And-Out</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex flex-row items-center bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB] px-2">{items.amount} x</Text>
              <Image
                source={{
                  uri: items.image,
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1 px-2">{items.name}</Text>
              <Text className="text-gray-600 px-2">
                <Currency quantity={items.price} currency="GBP" />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={total} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={total + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Preparing")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-lg text-white font-bold text-center">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;