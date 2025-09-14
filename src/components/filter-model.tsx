import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { FilterConfig } from "../constants/types";
import FilterCard from "./filter-card";

type Props = {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: Record<string, string>) => void;
  onReset: () => void;
  filterConfig: FilterConfig[];
  currentFilters: Record<string, string>;
};

export default function FilterModal({ visible, onClose, filterConfig, onFilter, onReset, currentFilters }: Props) {
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
            filterConfig={filterConfig}
            initialValues={currentFilters}
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
