import MixedForm from '@/src/components/mixed-form'
import { Drawing } from '@/src/constants/types'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { DrawingFormConfig, DrawingFormScehema } from './form-config'

interface DrawingDetailTabsProps {
  item: Drawing;
  selectedTab: string;
}

const DrawingDetailTabs: React.FC<DrawingDetailTabsProps> = ({ item, selectedTab }) => {
  switch (selectedTab) {
    case 'Details':
      return (
        <View className='flex-1'>
          <View className='flex-row mb-2 justify-end'>
            <TouchableOpacity
              className='rounded-[5px] bg-gray-100 mr-2 p-2'
              onPress={() => {
                return Alert.alert('Are you sure you want to delete this item?', 'This action is irreversible.', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Delete', onPress: () => { } },
                ]);
              }}
            >
              <Ionicons name="trash" size={24} color="#FF3B30" />
            </TouchableOpacity>
            <TouchableOpacity
              className='rounded-[5px] bg-gray-100 mr-2 p-2'
              onPress={() => router.push('/drawings')}
            >
              <Ionicons
                name="close"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <MixedForm
            formConfig={DrawingFormConfig}
            onSubmit={() => Alert.alert('Submitted')}
            initialValues={item}
            formSchema={DrawingFormScehema}
          />
        </View>
      )
    default:
      return <View ><Text>Not Implemented</Text></View>
  }
}

export default DrawingDetailTabs