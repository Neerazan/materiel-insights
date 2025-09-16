import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DrawingDetails = () => {

  const { id } = useLocalSearchParams()

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>DrawingDetails</Text>
      <Text>ID: {id}</Text>
    </View>
  )
}

export default DrawingDetails