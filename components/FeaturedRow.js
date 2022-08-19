import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ title, data, description }) => {
  return (
    <View>
      <View className="mt-4 flex flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {data.map((data) => (
          <RestaurantCard
            key={Math.random()}
            id={data.id}
            imgUrl={data.imgUrl}
            title={data.name}
            rating={data.rating}
            genre={data.genre}
            address={data.address}
            short_description={data.short_description}
            dishes={data.dishes}
            long={data.long}
            lat={data.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
