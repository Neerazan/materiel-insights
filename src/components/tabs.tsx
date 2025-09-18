import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Tab } from "../constants/types";

type Props = {
  tabs: Tab[];
  selectedTab: Tab | undefined;
  setSelectedTab: any;
}

export default function Tabs({ tabs, selectedTab, setSelectedTab }: Props) {
  return (
    <View className="bg-white h-auto px-4 py-2">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`px-4 py-2 rounded-[3px] border ${selectedTab?.id === item.id ? 'bg-primary border-primary' : 'bg-white border-gray-400'}`}
            activeOpacity={1}
            onPress={() => setSelectedTab(item)}
          >
            <Text className={`text-md ${selectedTab?.id === item.id ? 'text-white' : 'text-gray-800'}`}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerClassName='gap-2'
      />
    </View>
  );
}