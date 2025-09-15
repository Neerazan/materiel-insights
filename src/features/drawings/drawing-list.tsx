import DefaultList from '@/src/components/default-list'
import { icons } from '@/src/constants'
import { Drawing } from '@/src/constants/types'
import React from 'react'

const DrawingList = (dataItem: Drawing) => {
  return (
    <DefaultList
      title={dataItem?.name}
      listImage={icons.drawings}
      cardBody={{
        "Number": dataItem?.number,
        "Name": dataItem?.name,
        "Description": dataItem?.description,
      }}
    />
  )
}

export default DrawingList