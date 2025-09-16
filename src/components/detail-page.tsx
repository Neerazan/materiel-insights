import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BreadCrumbItem, Tab } from '../constants/types'
import Tabs from './tabs'

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
  return (
    <SafeAreaView className='flex-1 bg-white' edges={['top', 'left', 'right']}>
      <BreadCrumb data={breadCrumbData} />

      <View className='flex-1 bg-white'>
        <Tabs
          tabs={tabs}
        />
      </View>
    </SafeAreaView>
  )
}

export default DetailPage