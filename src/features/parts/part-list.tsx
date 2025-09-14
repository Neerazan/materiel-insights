import React from 'react'
import DefaultList from '@/src/components/default-list'
import { Part } from '@/src/constants/types'

const PartList = (dataItem: Part) => {
  return (
    <DefaultList
      title={dataItem?.name}
      cardBody={{
        "Part Number": dataItem?.partNumber,
        "CAGE Code": dataItem?.cageCode,
        "Quantity": dataItem?.quantity,
        "Status": dataItem?.status,
        "Lead Time": dataItem?.leadTime,
        "Cost": dataItem?.cost,
      }}
    />
  )
}

export default PartList