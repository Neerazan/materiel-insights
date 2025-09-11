import FilterView from "@/src/components/filter-view";
import { View, Text, Alert } from "react-native";

// Example usage
const Structure = () => {
  const handleAddItem = () => {
    Alert.alert("Add Item", "Add item button pressed");
  };

  return (
    <FilterView
      title="Your Content"
      onAddItem={handleAddItem}
      searchable={true}
      filterable={true}
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-500 text-base">
          Content area - Add your components here
        </Text>
      </View>
    </FilterView>
  );
};

export default Structure;