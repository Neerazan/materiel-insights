import { View, Text, Image } from "react-native";
import { images } from "../constants";

export function AuthScreenLayout({ children } : { children: React.ReactNode }) {
  return (
    <View className="flex-1 justify-center bg-white px-6">
      <View className="items-center mb-6">
        <Image
          source={images.logo}
          className="self-center size-20"
        />
        <Text className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Material Insight
        </Text>
      </View>
      {children}
    </View>
  );
}