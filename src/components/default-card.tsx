import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '../constants';

type Props = {
  title: string;
  imageUrl?: string;
  iconName?: string;
  cardBody?: Record<string, any>;
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onFavorite?: () => void;
  isFavorited?: boolean;
};

// Utility function to convert camelCase to Title Case
const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const DefaultCard = ({
  title,
  imageUrl,
  cardBody = {},
  onPress,
  onEdit,
  onDelete,
  onFavorite,
  isFavorited = false,
}: Props) => {
  const handleCardPress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-4 mx-1 mb-4 shadow-md flex-1 justify-center"
      onPress={handleCardPress}
      activeOpacity={0.7}
    >
      <View
        className="items-center justify-center mb-3 bg-gray-50 rounded-lg"
        style={{ aspectRatio: 19 / 9, minHeight: 80 }}
      >
          <Image
            source={icons.parts}
            className="w-full h-full rounded-lg"
            resizeMode="contain"
          />
      </View>

      <Text
        className="text-base font-semibold text-gray-800 mb-3 capitalize"
        numberOfLines={2}
        style={{ minHeight: 40 }}
      >
        {title || 'Untitled Item'}
      </Text>

      <View className="flex-1 mb-3">
        {Object.entries(cardBody).map(([key, value]) => {
          if (!value && value !== 0) return null;

          return (
            <View key={key} className="flex-row justify-between mb-1">
              <Text className="text-xs text-gray-600 font-medium capitalize flex-1">
                {camelCaseToTitleCase(key)}:
              </Text>
              <Text className="text-xs text-gray-800 flex-1 text-right" numberOfLines={1}>
                {value}
              </Text>
            </View>
          );
        })}
      </View>

      <View className="flex-row justify-between" style={{ height: 36 }}>
        <TouchableOpacity
          className="flex-1 bg-blue-50 border border-blue-500 rounded-md justify-center items-center mx-1"
          onPress={(e) => {
            e.stopPropagation();
            onEdit && onEdit();
          }}
        >
          <Ionicons name="pencil" size={16} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-red-50 border border-red-500 rounded-md justify-center items-center mx-1"
          onPress={(e) => {
            e.stopPropagation();
            onDelete && onDelete();
          }}
        >
          <Ionicons name="trash" size={16} color="#FF3B30" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-gray-50 border border-gray-300 rounded-md justify-center items-center mx-1"
          onPress={(e) => {
            e.stopPropagation();
            onFavorite && onFavorite();
          }}
        >
          <Ionicons
            name={isFavorited ? "star" : "star-outline"}
            size={16}
            color={isFavorited ? "#FFD700" : "#666"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultCard;