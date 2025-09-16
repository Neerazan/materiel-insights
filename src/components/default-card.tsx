import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  cardImage: ImageSourcePropType;
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
  cardImage,
  cardBody = {},
  onPress,
  onEdit,
  onDelete,
  onFavorite,
  isFavorited = false,
}: Props) => {
  const handleCardPress = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-3 mb-4 justify-center flex-1"
      onPress={handleCardPress}
      activeOpacity={0.7}
      style={{ boxShadow: '0 5px 3px rgba(0,0,0,0.1)', maxWidth:'50%' }}
    >
      <View
        className="items-center justify-center mb-3 bg-gray-50 rounded-lg py-4"
        style={{ height: 90 }}
      >
        <Image
          source={cardImage}
          className="w-full h-full rounded-lg"
          resizeMode="contain"
          tintColor={'#4F4F4F'}
        />
      </View>

      <Text
        className="text-base font-semibold text-gray-800 capitalize"
        numberOfLines={2}
        style={{ height: 30 }}
      >
        {title || 'Untitled Item'}
      </Text>

      <View
        className="flex-1 mb-3"
        style={{ height: 120 }}
      >
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