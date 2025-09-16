import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BreadCrumbItem, Tab } from '../constants/types'

function BreadCrumb({ data }: { data: BreadCrumbItem[] }) {
  return (
    <View className='flex-row items-center px-4 py-3 bg-white border-b border-gray-200 gap-2'>
      <Link href={'..'} className='flex-row items-center text-primary'>
        <Entypo name="home" size={24} />
      </Link>
      <Entypo name="chevron-right" size={18} color="#4B5563" />

      {
        data.map((item, index) => (
          <React.Fragment key={item.href}>
            <Link href={item.href} className={`text-lg font-semibold ${item.disabled ? 'text-gray-500' : 'text-primary'}`} disabled={item.disabled}>{item.label}</Link>
            {index !== data.length - 1 && <Entypo name="chevron-right" size={18} color="#4B5563" />}
          </React.Fragment>
        ))
      }
    </View>
  )
}

const DetailPage = ({
  tabs,
  breadCrumbData,
}: { tabs: Tab[], breadCrumbData: BreadCrumbItem[] }) => {
  function Tabs({ tabs, initialPage }: any) {
    const [activeTab, setActiveTab] = useState(() => {
      return tabs.find((tab: any) => tab.selected)?.id || initialPage.toString();
    });

    return (
      <View className="bg-white h-auto px-4 py-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`px-4 py-2 rounded-[3px] border ${activeTab === item.id ? 'bg-primary border-primary' : 'bg-white border-gray-400'}`}
              activeOpacity={1}
              onPress={() => setActiveTab(item.id)}
            >
              <Text className={`text-md ${activeTab === item.id ? 'text-white' : 'text-gray-800'}`}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerClassName='gap-2'
        />
      </View>
    );
  }

  return (
    <SafeAreaView className='flex-1 bg-white' edges={['top', 'left', 'right']}>
      <BreadCrumb data={breadCrumbData} />

      <View className='flex-1 bg-white'>
        <Tabs
          tabs={tabs}
          tabBarStyle={{ backgroundColor: '#fff' }}
          tabBarIndicatorStyle={{ backgroundColor: '#3B82F6' }}
          initialPage={0}
        />
      </View>
    </SafeAreaView>
  )
}

export default DetailPage