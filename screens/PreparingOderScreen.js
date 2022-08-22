import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const PreparingOderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex flex-1 justify-center bg-[#00CCBB]">
      <Animatable.Image
        source={require("../assets/tenor.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96 relative right-5"
      />
      <Animatable.Text className="text-lg my-10 text-white font-bold text-center">
        Wating for Restaurant to accept your order
      </Animatable.Text>
      {/* 
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
        className="flex items-center"
      /> */}
      <AnimatedCircularProgress
        className="flex items-center"
        size={80}
        width={10}
        fill={100}
        duration={500}
        tintColor="#ffffff"
        backgroundColor="#3d5875"
      />
    </SafeAreaView>
  );
};

export default PreparingOderScreen;
