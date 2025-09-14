import React from 'react'
import DefaultList from '@/src/components/default-list'
import { Drawing } from '@/src/constants/types'

const DrawingList = (dataItem: Drawing) => {
  return (
    <DefaultList
      title={dataItem?.name}
      cardBody={{
        "Number": dataItem?.number,
        "Name": dataItem?.name,
        "Description": dataItem?.description,
      }}
    />
  )
}

export default DrawingList