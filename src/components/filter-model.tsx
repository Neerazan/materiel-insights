import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import FilterCard from "./filter-card";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function FilterModal({ visible, onClose }: Props) {
  const filters = [
    { label: "Part Name", type: "search" },
    { label: "Cage Code", type: "search" },
    { label: "Distribution Statement", type: "search" },
    { label: "NSN", type: "search" },
    { label: "UOC", type: "search" },
    { label: "Quantity", type: "numberRange" },
    { label: "Created Date", type: "dateRange" },
    {
      label: "Status",
      type: "dropdown",
      options: ["Available", "On Order", "Critical Shortage"],
    },
    {
      label: "Sort By",
      type: "sort",
      options: ["Latest", "Oldest", "Price: Low to High", "Price: High to Low"],
    },
  ];

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white rounded-t-2xl p-4 h-[70%]">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Filters</Text>
          <TouchableOpacity onPress={onClose}>
            <Text className="text-red-500 font-semibold">Close</Text>
          </TouchableOpacity>
        </View>

        {/* Reusable Layout */}
        <FilterCard
          filters={filters}
          onApply={(values) => {
            console.log("Applied Filters:", values);
            onClose();
          }}
          onReset={() => console.log("Filters Reset")}
        />
      </View>
    </Modal>
  );
}
