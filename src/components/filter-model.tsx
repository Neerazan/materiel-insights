import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import FilterCard from "./filter-card";

type Props = {
  visible: boolean;
  onClose: () => void;
  filterConfig: {
    label: string;
    type: string; 
    options?: string[];
  }[];
};

export default function FilterModal({ visible, onClose, filterConfig }: Props) {
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
          filters={filterConfig}
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
