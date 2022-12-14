import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { XIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
// import MapView from "react-native-maps";
// import { Marker } from "react-native-svg";

const DeliveryScreen = () => {
  return (
    <View className="flex flex-1">
      <SafeAreaView
        className="w-full bg-[#00CCBB] z-50"
        style={{ position: "fixed" }}
      >
        <View className="flex flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">44-45 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order In-And-Out is being prepared
          </Text>
        </View>
      </SafeAreaView>
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: "1",
            longitude: "1",
          }}
          title="restaurant"
          description="ddd"
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView> */}
      <Image
        source={{
          uri: require("../assets/map.png"),
        }}
        className="w-full h-full mt-5"
      />
      <SafeAreaView
        className="w-full bottom-0 bg-white flex flex-row items-center space-x-5 h-28"
        style={{ position: "fixed" }}
      >
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          S
          className="w-12 h-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
