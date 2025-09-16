import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Tab } from "../constants/types";

export default function Tabs({ tabs }: { tabs: Tab[] }) {

  const [activeTab, setActiveTab] = useState(() => {
    return tabs.find((tab: any) => tab.selected)?.id;
  });

  return (
    <View className="bg-white h-auto px-4 py-2">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`px-4 py-2 rounded-[3px] border ${activeTab === item.id ? 'bg-primary border-primary' : 'bg-white border-gray-400'}`}
            activeOpacity={1}
            onPress={() => setActiveTab(item.id)}
          >
            <Text className={`text-md ${activeTab === item.id ? 'text-white' : 'text-gray-800'}`}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerClassName='gap-2'
      />
    </View>
  );
}