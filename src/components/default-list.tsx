import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

export type DataItemProps = {
  title?: string;
  listImage: ImageSourcePropType;
  defaultIcon?: string;
  cardBody?: Record<string, any>;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

export default function DefaultListItem({
  title,
  listImage,
  cardBody = {},
  onDelete,
  onClick,
  onEdit
}: DataItemProps) {
  return (
    <View
      className="bg-white mx-1 mb-2 rounded-lg"
      style={{ boxShadow: '0 3px 3px rgba(0,0,0,0.1)' }}
    >
      <View className="flex-row flex-1 py-1 px-2">
        <View className="mr-4 justify-center items-center">
          <View
            className="items-center justify-center bg-gray-50 rounded-lg p-2"
            style={{ width: 48, height: 48 }}
          >
            <Image
              source={listImage}
              className="w-full h-full rounded-lg"
              tintColor={'#4F4F4F'}
              resizeMode="contain"
            />
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
                <View className="flex-row ml-auto" style={{ height: 25 }}>
                  <TouchableOpacity
                    className="flex-1 bg-blue-50 border border-blue-500 rounded-md justify-center items-center mx-1 px-1"
                    onPress={(e) => {
                      e.stopPropagation();
                      onEdit && onEdit();
                    }}
                  >
                    <Ionicons name="pencil" size={16} color="#007AFF" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-1 bg-red-50 border border-red-500 rounded-md justify-center items-center mx-1 px-1"
                    onPress={(e) => {
                      e.stopPropagation();
                      onDelete && onDelete();
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