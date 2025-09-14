import React from 'react'
import DefaultList from '@/src/components/default-list'
import { Drawing } from '@/src/constants/types'
import { icons } from '@/src/constants'

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