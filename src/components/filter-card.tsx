import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FilterType } from "../constants/static.list";
import CustomInput from "./custom-input";

type FilterField = {
  label: string;
  filterType: FilterType;
  name: string;
  placeholder: string;
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

  const renderFilter = (field: FilterField) => {
    switch (field.filterType) {
      case FilterType.Search:
        return (
          <View key={field.name} className="mb-4">
            <CustomInput
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChangeText={(text: string) => handleChange(field.name, text)}
              styles="py-2 rounded-[5px]"
            />
          </View>
        );

      case FilterType.NumberRange:
        return (
          <View key={field.name} className="mb-4">
            <Text className="text-gray-700 text-base font-medium mb-2">{field.label}</Text>
            <View className="flex-row gap-4">
              <View className="flex-1">
                <CustomInput
                  label="Min"
                  placeholder={"Enter min value"}
                  value={values[`${field.name}_min`] || ""}
                  onChangeText={(text) => handleChange(`${field.name}_min`, text)}
                  keyboardType="numeric"
                  styles="rounded-[5px] py-1"
                />
              </View>
              <View className="flex-1">
                <CustomInput
                  label="Max"
                  placeholder={"Enter max value"}
                  value={values[`${field.name}_max`] || ""}
                  onChangeText={(text) => handleChange(`${field.name}_max`, text)}
                  keyboardType="numeric"
                  styles="rounded-[5px] py-1"
                />
              </View>
            </View>
          </View>
        );

      case FilterType.DateRange:
        return (
          <View key={field.name} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <View className="flex-row space-x-2">
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="From (YYYY-MM-DD)"
                value={values[`${field.name}_from`] || ""}
                onChangeText={(text) => handleChange(`${field.name}_from`, text)}
              />
              <TextInput
                className="border rounded-lg px-3 py-2 flex-1"
                placeholder="To (YYYY-MM-DD)"
                value={values[`${field.name}_to`] || ""}
                onChangeText={(text) => handleChange(`${field.name}_to`, text)}
              />
            </View>
          </View>
        );

      case FilterType.Dropdown:
        return (
          <View key={field.name} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <FlatList
              horizontal
              data={field.options || []}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => (
                    values[field.name] === item ?
                      handleChange(field.name, "") :
                      handleChange(field.name, item)
                  )}
                  className={`px-3 py-2 border rounded-[5px] mr-2 ${values[field.name] === item ? "bg-blue-500 border-blue-500" : "border-gray-400"
                    }`}
                >
                  <Text className={values[field.name] === item ? "text-white" : "text-gray-600"}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );

      case FilterType.Sort:
        return (
          <View key={field.name} className="mb-4">
            <Text className="mb-1 font-semibold">{field.label}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={field.options || []}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => (
                    values[field.name] === item ?
                      handleChange(field.name, "") :
                      handleChange(field.name, item)
                  )}
                  className={`px-3 py-2 border rounded-[5px] mr-2 ${values[field.name] === item ? "bg-blue-500 border-blue-500" : "border-gray-400"
                    }`}
                >
                  <Text className={values[field.name] === item ? "text-white" : "text-gray-600"}>
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
        renderItem={({ item }) => renderFilter(item)}
        keyExtractor={(item) => item.name}
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
