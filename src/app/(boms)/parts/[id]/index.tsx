import DetailPage from '@/src/components/detail-page'
import { partsData } from '@/src/constants'
import { BreadCrumbItem, Tab } from '@/src/constants/types'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const tabs: Tab[] = [
  { id: '1', title: 'Overview', selected: true },
  { id: '2', title: 'Details' },
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
    <DetailPage
      tabs={tabs}
      breadCrumbData={breadCrumbData}
    />
  )
}

export default PartDetail