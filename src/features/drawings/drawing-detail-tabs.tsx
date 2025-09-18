import MixedForm from '@/src/components/mixed-form'
import { Drawing } from '@/src/constants/types'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import { DrawingFormConfig, DrawingFormScehema } from './form-config'

interface DrawingDetailTabsProps {
  item: Drawing;
  selectedTab: string;
}

const DrawingDetailTabs: React.FC<DrawingDetailTabsProps> = ({ item, selectedTab }) => {
  switch (selectedTab) {
    case 'Details':
      return (
        <MixedForm
          formConfig={DrawingFormConfig}
          onSubmit={() => Alert.alert('Submitted')}
          initialValues={item}
          formSchema={DrawingFormScehema}
        />
      )
    default:
      return <View ><Text>Not Implemented</Text></View>
  }
}

export default DrawingDetailTabs