import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native-web";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const featuredData = [
    {
      title: "Sushi",
      items: [
        {
          id: 1,
          name: "Sushi",
          rating: "5",
          imgUrl: "https://links.papareact.com/gn7",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 2,
          name: "Sushi",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 3,
          name: "Sushi",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 4,
          name: "Sushi",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2016/04/26/03/55/salmon-1353598_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 5,
          name: "Sushi",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
      ],
    },
    {
      title: "Hamburger",
      items: [
        {
          id: 6,
          name: "Hamburger",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 7,
          name: "Hamburger",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/09/03/15/05/sandwich-434658_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 8,
          name: "Hamburger",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 9,
          name: "Hamburger",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 10,
          name: "Hamburger",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
      ],
    },
    {
      title: "Pizza",
      items: [
        {
          id: 11,
          name: "Pizza",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 12,
          name: "Pizza",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000600_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 13,
          name: "Pizza",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 14,
          name: "Pizza",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 15,
          name: "Pizza",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
      ],
    },
    {
      title: "Desert",
      items: [
        {
          id: 16,
          name: "Desert",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 17,
          name: "Desert",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 18,
          name: "Desert",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 19,
          name: "Desert",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
        {
          id: 20,
          name: "Desert",
          rating: "5",
          imgUrl:
            "https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_1280.jpg",
          genre: "Japanese",
          address: "123 Main St",
          short_description: "This is a Test descripton",
          dishes: [],
          long: "20",
          lat: "0",
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Category */}
        <Categories />
        {/* Featured */}
        {featuredData.map((data) => (
          <FeaturedRow
            title={data.title}
            data={data.items}
            key={Math.random()}
            description="Paid placements from our partners"
            featureCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
