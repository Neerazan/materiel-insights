import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

// Types
type FilterType = "search" | "numberRange" | "dateRange" | "dropdown" | "sort";

type FilterField = {
  id: string;
  label: string;
  type: FilterType;
  options?: string[];
};

type Props = {
  filters: FilterField[];
  onApply: (values: Record<string, any>) => void;
  onReset?: () => void;
};

export default function FilterCard({ filters, onApply, onReset }: Props) {
  const [values, setValues] = useState<Record<string, any>>({});

  const handleChange = (key: number | string, value: any) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const renderFilter = (field: FilterField, index: number) => {
    switch (field.type) {
      case "search":
        return (
          <View key={index} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <TextInput
              className="border rounded-lg px-3 py-2"
              placeholder={`Search ${field.label}`}
              value={values[index] || ""}
              onChangeText={(text) => handleChange(index, text)}
            />
          </View>
        );

      case "numberRange":
        return (
          <View key={index} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <View className="flex-row space-x-2">
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="Min"
                keyboardType="numeric"
                value={values[`${index}_min`] || ""}
                onChangeText={(text) => handleChange(`${index}_min`, text)}
              />
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="Max"
                keyboardType="numeric"
                value={values[`${index}_max`] || ""}
                onChangeText={(text) => handleChange(`${index}_max`, text)}
              />
            </View>
          </View>
        );

      case "dateRange":
        return (
          <View key={index} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <View className="flex-row space-x-2">
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="From (YYYY-MM-DD)"
                value={values[`${index}_from`] || ""}
                onChangeText={(text) => handleChange(`${index}_from`, text)}
              />
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="To (YYYY-MM-DD)"
                value={values[`${index}_to`] || ""}
                onChangeText={(text) => handleChange(`${index}_to`, text)}
              />
            </View>
          </View>
        );

      case "dropdown":
        return (
          <View key={index} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <FlatList
              horizontal
              data={field.options || []}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleChange(index, item)}
                  className={`px-3 py-2 border rounded-lg mr-2 ${values[index] === item ? "bg-blue-500" : ""
                    }`}
                >
                  <Text className={values[index] === item ? "text-white" : ""}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );

      case "sort":
        return (
          <View key={index} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <FlatList
              horizontal
              data={field.options || []}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleChange(index, item)}
                  className={`px-3 py-2 border rounded-lg mr-2 ${values[index] === item ? "bg-green-500" : ""
                    }`}
                >
                  <Text className={values[index] === item ? "text-white" : ""}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <FlatList
        data={filters}
        renderItem={({ item, index }) => renderFilter(item, index)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      {/* Footer buttons */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          className="px-4 py-3 rounded-lg bg-gray-200 flex-1 mr-2"
          onPress={() => {
            setValues({});
            onReset && onReset();
          }}
        >
          <Text className="text-center font-semibold">Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 py-3 rounded-lg bg-[#0D6EFD] flex-1 ml-2"
          onPress={() => onApply(values)}
        >
          <Text className="text-center text-white font-semibold">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
