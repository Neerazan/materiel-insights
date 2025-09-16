import DetailPage from '@/src/components/detail-page'
import { BreadCrumbItem, Tab } from '@/src/constants/types'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const DrawingDetails = () => {
  const { id } = useLocalSearchParams()

  const tabs: Tab[] = [
    { id: '1', title: 'Overview', selected: true },
    { id: '2', title: 'Details' },
    { id: '3', title: 'Drawing Structure' },
    { id: '4', title: 'Where Used' },
    { id: '5', title: 'Attachments' },
    { id: '6', title: 'History' },
  ];

  const breadCrumbData: BreadCrumbItem[] = [
    {
      label: 'Drawings',
      href: '/(boms)/drawings',
    },
    {
      label: id.toString(),
      href: `/(boms)/drawings/${id}`,
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

export default DrawingDetails