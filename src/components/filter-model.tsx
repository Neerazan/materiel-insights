import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import FilterCard from "./filter-card";
import { FilterConfig } from "../constants/types";

type Props = {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: any) => void;
  onReset: () => void;
  filterConfig: FilterConfig[];
};

export default function FilterModal({ visible, onClose, filterConfig, onFilter, onReset }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        <Pressable className="absolute inset-0 bg-black/40" onPress={onClose} />
        <View className="bg-white rounded-t-2xl p-4 h-[70%]">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Filters</Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-red-500 font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
          <FilterCard
            filters={filterConfig as any}
            onApply={(values) => {
              onFilter(values);
              onClose();
            }}
            onReset={() => {
              onClose();
              onReset();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
