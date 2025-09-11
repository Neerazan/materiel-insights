import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { icons } from '../constants';
import { Ionicons } from '@expo/vector-icons';

export type DataItemProps = {
  title?: string;
  imageSrc?: string;
  defaultIcon?: string;
  cardBody?: Record<string, any>;
  onClick?: () => void;
};

const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

export default function DefaultListItem({
  title,
  imageSrc,
  cardBody = {},
}: DataItemProps) {
  return (
    <View
      className="bg-white border-b border-gray-200 mx-1 shadow-md mb-1 rounded-lg"
    >
      <View className="flex-row flex-1 py-1 px-2">
        <View className="mr-4 justify-center items-center">
          <View
            className="items-center justify-center bg-gray-50 rounded-lg"
            style={{ width: 48, height: 48 }}
          >
            {imageSrc ? (
              <Image
                source={{ uri: imageSrc }}
                className="w-full h-full rounded-lg"
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.parts}
                className="w-8 h-8"
                resizeMode="contain"
              />
            )}
          </View>
        </View>

        {/* Content Section */}
        <View className="flex-1">
          {/* Title */}
          <Text className="text-lg font-semibold text-gray-900 mb-2">
            {title || 'Untitled Item'}
          </Text>

          {/* Details - Headers */}
          <View className="flex-row mb-1">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Object.entries(cardBody)}
              keyExtractor={(item) => item[0]}
              renderItem={({ item }) => (
                <View key={item[0]} className="flex-col mr-4 mb-1">
                  <Text className="text-xs text-gray-800 font-medium">
                    {camelCaseToTitleCase(item[0])}
                  </Text>
                  <Text className="text-xs text-gray-500 ml-1" numberOfLines={1}>
                    {item[1]}
                  </Text>
                </View>
              )}
              ListFooterComponent={
                <View className="flex-row" style={{ height: 25 }}>
                  <TouchableOpacity
                    className="flex-1 bg-blue-50 border border-blue-500 rounded-md justify-center items-center mx-1 px-1"
                    onPress={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Ionicons name="pencil" size={16} color="#007AFF" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-1 bg-red-50 border border-red-500 rounded-md justify-center items-center mx-1 px-1"
                    onPress={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Ionicons name="trash" size={16} color="#FF3B30" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-md justify-center items-center mx-1 px-1"
                    onPress={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Ionicons
                      name={"star-outline"}
                      size={16}
                      color={"#666"}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}