import DefaultList from '@/src/components/default-list'
import { icons } from '@/src/constants'
import { Part } from '@/src/constants/types'
import React from 'react'

const PartList = (dataItem: Part) => {
  return (
    <DefaultList
      title={dataItem?.name}
      listImage={icons.parts}
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