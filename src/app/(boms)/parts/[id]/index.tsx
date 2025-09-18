import DetailPage from '@/src/components/detail-page'
import { partsData } from '@/src/constants'
import { BreadCrumbItem, Tab } from '@/src/constants/types'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import PartDetailTabs from '@/src/features/parts/part-detail-tabs'

const tabs: Tab[] = [
  { id: '2', title: 'Details', selected: true },
  { id: '3', title: 'IPB Structure' },
  { id: '4', title: 'Where Used' },
  { id: '5', title: 'Attachments' },
  { id: '6', title: 'Drawings' },
  { id: '7', title: 'Alternates' },
  { id: '8', title: 'History' },
];

const PartDetail = () => {
  const { id } = useLocalSearchParams()
  const dataItem = partsData.find((item) => item.id === id)

  const breadCrumbData: BreadCrumbItem[] = [
    {
      label: 'Parts',
      href: '/(boms)/parts',
    },
    {
      label: dataItem?.name || '',
      href: `/(boms)/parts/${id}`,
      disabled: true,
    }
  ]

  return (
    dataItem ? (
      <DetailPage
        tabs={tabs}
        breadCrumbData={breadCrumbData}
        detailTabs={PartDetailTabs}
        item={dataItem}
      />
    ) :
      <View>
        <Text>Not Implemented</Text>
      </View>
  )
}

export default PartDetail