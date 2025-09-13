import FilterModal from '@/src/components/filter-model';
import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFilter from '../hooks/use-filter';
import { FilterConfig } from '../constants/types';


interface FilterViewProps<T> {
  data: T[];
  title?: string;
  onAddItem?: () => void;
  filterable?: boolean;
  cardView: (item: T) => React.ReactElement;
  listView: (item: T) => React.ReactElement;
  filterConfig?: FilterConfig[];
}

function FilterView<T extends { id: string }>({
  data = [],
  title = "Item Name",
  onAddItem,
  filterable = true,
  cardView,
  listView,
  filterConfig = [],
}: FilterViewProps<T>) {
  const [isListView, setIsListView] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<any[]>([]);
  const { filteredItems } = useFilter<T>(data, filterConfig, filters);

  const numColumns = isListView ? 1 : 2;
  const renderItemFunction = isListView ? listView : cardView;

  const onFilter = (values: any) => {
    setFilters(values)
  }

  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      edges={['top', 'left', 'right']}
    >
      {/* Header */}
      <View className="bg-white border-b border-gray-200">
        <View className="px-4 py-3">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-semibold text-gray-900">{title}</Text>
            <View className="flex-row items-center space-x-2">
              {filterable && (
                <TouchableOpacity
                  className={`p-2 rounded-lg ${showFilters ? 'bg-blue-100' : 'bg-gray-100'}`}
                  activeOpacity={1}
                  onPress={() => setShowFilters(!showFilters)}
                >
                  <Feather
                    name="filter"
                    size={18}
                    color={showFilters ? "#3B82F6" : "#6B7280"}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                className={`p-2 rounded-lg ml-2 ${isListView ? 'bg-blue-100' : 'bg-gray-100'}`}
                activeOpacity={1}
                onPress={() => setIsListView(!isListView)}
              >
                <Ionicons
                  name={isListView ? "list-outline" : "grid-outline"}
                  size={18}
                  color={isListView ? "#3B82F6" : "#6B7280"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Content Area */}
      <View className="flex-1">
        <FlatList
          data={filteredItems}
          key={numColumns}
          keyExtractor={(item) => item.id }
          numColumns={numColumns}
          columnWrapperStyle={numColumns > 1 ? { justifyContent: "space-between" } : null}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 8 }}
          renderItem={({ item }) => renderItemFunction(item)}
        />
      </View>

      <TouchableOpacity
        className="absolute bottom-4 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-lg items-center justify-center"
        onPress={onAddItem}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Filter Model */}
      <FilterModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        filterConfig={filterConfig}
        onFilter={onFilter}
      />
    </SafeAreaView>
  );
};

export default FilterView;