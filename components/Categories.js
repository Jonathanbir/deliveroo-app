import { ScrollView } from "react-native";
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
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628__480.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://media.istockphoto.com/photos/fresh-homemade-hamburger-served-on-wood-picture-id519490902?k=20&m=519490902&s=612x612&w=0&h=mA3sni-oDB3tZAksz6mwl_g2ECF_E3_eX3RgtDcTk14="
        title="Hambuger"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442945__480.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313__480.jpg"
        title="Dessert"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg"
        title="Desert"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Hamburger"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg"
        title="food3"
      />
    </ScrollView>
  );
};

export default Categories;
