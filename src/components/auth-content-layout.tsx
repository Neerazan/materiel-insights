import { View, Text, Image, SafeAreaView } from "react-native";
import { images } from "@/src/constants";

export function AuthContentLayout({ children } : { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Header with logo - fixed at top */}
        <View className="items-center py-6 px-6 bg-white shadow-sm">
          <Image
            source={images.logo}
            className="self-center size-16 mb-3"
          />
          <Text className="text-xl font-semibold text-gray-800 text-center">
            Material Insight
          </Text>
        </View>

        {/* Main content area */}
        <View className="flex-1 px-6">
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}