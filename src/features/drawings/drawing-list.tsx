import DefaultList from '@/src/components/default-list'
import { icons } from '@/src/constants'
import { Drawing } from '@/src/constants/types'
import React from 'react'

type Props = {
  dataItem: Drawing;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DrawingList = ({ dataItem, onEdit, onDelete }: Props) => {
  return (
    <DefaultList
      title={dataItem?.name}
      listImage={icons.drawings}
      onDelete={onDelete}
      onEdit={onEdit}
      cardBody={{
        "Number": dataItem?.number,
        "Name": dataItem?.name,
        "Description": dataItem?.description,
      }}
    />
  )
}

export default DrawingList