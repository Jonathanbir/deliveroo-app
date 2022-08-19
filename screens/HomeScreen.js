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

  const dishes_sushi = [
    {
      id: 1,
      name: "Sushi",
      description: "This is a Test descripton",
      price: "30",
      image:
        "https://media.istockphoto.com/photos/sushi-roll-alone-with-a-white-background-picture-id178279773?k=20&m=178279773&s=612x612&w=0&h=UuzJJ0gDZmqA51n-4HE3MOxyXnoKOhn89bLn_9ItJbc=",
    },
    {
      id: 2,
      name: "Sushi",
      description: "This is a Test descripton",
      price: "30",
      image:
        "https://cdn.pixabay.com/photo/2015/04/10/15/58/salmon-716430_1280.jpg",
    },
    {
      id: 3,
      name: "Sushi",
      description: "This is a Test descripton",
      price: "50",
      image:
        "https://media.istockphoto.com/photos/tuna-sushi-picture-id495585685?k=20&m=495585685&s=612x612&w=0&h=tJkcMb3HLIhEt_KWZR22jgICR71RXYa2_SodTj4f9w8=",
    },
    {
      id: 4,
      name: "Sushi",
      description: "This is a Test descripton",
      price: "150",
      image:
        "https://media.istockphoto.com/photos/fresh-sliced-raw-tuna-or-akami-sushi-sashimi-topped-with-pickled-picture-id1149230378?k=20&m=1149230378&s=612x612&w=0&h=Kjt4NRSb3L_6YwhZaj1tt2O2ovdtF2ohMl3yBgnJ9Gc=",
    },
    {
      id: 5,
      name: "Sushi",
      description: "This is a Test descripton",
      price: "200",
      image:
        "https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628__480.jpg",
    },
  ];

  const dishes_hambuger = [
    {
      id: 1,
      name: "Hambuger",
      description: "This is a Test descripton",
      price: "90",
      image:
        "https://media.istockphoto.com/photos/delicious-hamburger-on-a-wooden-table-with-a-dark-brown-background-picture-id1344001598?k=20&m=1344001598&s=612x612&w=0&h=3vURz2OBMq7D02tYA2YlA6Tqs-RCORuXdj70IeeGnPA=",
    },
    {
      id: 2,
      name: "Hambuger",
      description: "This is a Test descripton",
      price: "90",
      image:
        "https://media.istockphoto.com/photos/tasty-beef-burgers-served-picture-id877896306?k=20&m=877896306&s=612x612&w=0&h=dmdf6etaobVANGuimxMQUrakIS7NsW69IfzV3CeHfU0=",
    },
    {
      id: 3,
      name: "Hambuger",
      description: "This is a Test descripton",
      price: "150",
      image:
        "https://media.istockphoto.com/photos/fresh-homemade-hamburger-served-on-wood-picture-id519490902?k=20&m=519490902&s=612x612&w=0&h=mA3sni-oDB3tZAksz6mwl_g2ECF_E3_eX3RgtDcTk14=",
    },
    {
      id: 4,
      name: "Hambuger",
      description: "This is a Test descripton",
      price: "150",
      image:
        "https://media.istockphoto.com/photos/beef-burger-with-french-fries-on-wooden-board-picture-id1322871710?k=20&m=1322871710&s=612x612&w=0&h=NC06fUsc3_1GrQhCMcizuiRzD1LrDqk-cscco-X3m3g=",
    },
    {
      id: 5,
      name: "Hambuger",
      description: "This is a Test descripton",
      price: "100",
      image:
        "https://media.istockphoto.com/photos/tasty-hamburger-with-meat-and-vegetables-against-a-dark-background-picture-id968536966?k=20&m=968536966&s=612x612&w=0&h=zCTBxX4mAE1WCt0KTEkYIKs7PqryuQZYin75UfJia9M=",
    },
  ];

  const dishes_pizza = [
    {
      id: 1,
      name: "Pizza",
      description: "This is a Test descripton",
      price: "300",
      image:
        "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332__480.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      description: "This is a Test descripton",
      price: "300",
      image:
        "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__480.jpg",
    },
    {
      id: 3,
      name: "Pizza",
      description: "This is a Test descripton",
      price: "350",
      image:
        "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183__480.jpg",
    },
    {
      id: 4,
      name: "Pizza",
      description: "This is a Test descripton",
      price: "250",
      image:
        "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__480.png",
    },
    {
      id: 5,
      name: "Pizza",
      description: "This is a Test descripton",
      price: "200",
      image:
        "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442945__480.jpg",
    },
  ];

  const dishes_dessert = [
    {
      id: 1,
      name: "Dessert",
      description: "This is a Test descripton",
      price: "50",
      image:
        "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg",
    },
    {
      id: 2,
      name: "Dessert",
      description: "This is a Test descripton",
      price: "50",
      image:
        "https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_1280.jpg",
    },
    {
      id: 3,
      name: "Dessert",
      description: "This is a Test descripton",
      price: "50",
      image:
        "https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313__480.jpg",
    },
    {
      id: 4,
      name: "Dessert",
      description: "This is a Test descripton",
      price: "150",
      image:
        "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg",
    },
    {
      id: 5,
      name: "Dessert",
      description: "This is a Test descripton",
      price: "200",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/14/53/macarons-2179198__480.jpg",
    },
  ];

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
          dishes: dishes_sushi,
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
          dishes: dishes_sushi,
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
          dishes: dishes_sushi,
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
          dishes: dishes_sushi,
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
          dishes: dishes_sushi,
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
          dishes: dishes_hambuger,
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
          dishes: dishes_hambuger,
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
          dishes: dishes_hambuger,
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
          dishes: dishes_hambuger,
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
          dishes: dishes_hambuger,
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
          dishes: dishes_pizza,
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
          dishes: dishes_pizza,
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
          dishes: dishes_pizza,
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
          dishes: dishes_pizza,
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
          dishes: dishes_pizza,
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
          dishes: dishes_dessert,
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
          dishes: dishes_dessert,
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
          dishes: dishes_dessert,
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
          dishes: dishes_dessert,
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
          dishes: dishes_dessert,
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
