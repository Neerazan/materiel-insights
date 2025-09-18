import DetailPage from '@/src/components/detail-page'
import { drawingData } from '@/src/constants'
import { BreadCrumbItem, Tab } from '@/src/constants/types'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import DrawingDetailTabs from '@/src/features/drawings/drawing-detail-tabs'
import { View, Text } from 'react-native'

const DrawingDetails = () => {
  const { id } = useLocalSearchParams()
  const dataItem = drawingData.find((item) => item.id === id)

  const tabs: Tab[] = [
    { id: '1', title: 'Details', selected: true },
    { id: '2', title: 'Drawing Structure' },
    { id: '3', title: 'Where Used' },
    { id: '4', title: 'Attachments' },
    { id: '5', title: 'History' },
  ];

  const breadCrumbData: BreadCrumbItem[] = [
    {
      label: 'Drawings',
      href: '/(boms)/drawings',
    },
    {
      label: dataItem?.name || '',
      href: `/(boms)/drawings/${id}`,
      disabled: true,
    }
  ]

  return (
    dataItem ? (
      <DetailPage
        tabs={tabs}
        breadCrumbData={breadCrumbData}
        detailTabs={DrawingDetailTabs}
        item={dataItem}
      />
    ) :
    <View>
      <Text>Not Implemented</Text>
    </View>
  )
}

export default DrawingDetails