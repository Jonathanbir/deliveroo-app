import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="food3" />
    </ScrollView>
  );
};

export default Categories;
