import MixedForm from '@/src/components/mixed-form'
import { Part } from '@/src/constants/types'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import { PartFormConfig, PartFormScehema } from './form-config'

interface PartDetailTabsProps {
  item: Part;
  selectedTab: string;
}

const PartDetailTabs: React.FC<PartDetailTabsProps> = ({ item, selectedTab }) => {
  switch (selectedTab) {
    case 'Details':
      return (
        <MixedForm
          formConfig={PartFormConfig}
          onSubmit={() => Alert.alert('Submitted')}
          initialValues={item}
          formSchema={PartFormScehema}
        />
      )
    default:
      return <View ><Text>Not Implemented</Text></View>
  }
}

export default PartDetailTabs