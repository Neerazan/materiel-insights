import MixedForm from '@/src/components/mixed-form'
import { Part } from '@/src/constants/types'
import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'
import { PartFormConfig, PartFormScehema } from './form-config'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface PartDetailTabsProps {
  item: Part;
  selectedTab: string;
}

const PartDetailTabs: React.FC<PartDetailTabsProps> = ({ item, selectedTab }) => {
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
            formConfig={PartFormConfig}
            onSubmit={() => Alert.alert('Submitted')}
            initialValues={item}
            formSchema={PartFormScehema}
          />
        </View>
      )
    default:
      return <View ><Text>Not Implemented</Text></View>
  }
}

export default PartDetailTabs