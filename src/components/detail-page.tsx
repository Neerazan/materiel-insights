import React, { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BreadCrumbItem, Tab } from '../constants/types'
import BreadCrumb from './breadcrumb'
import Tabs from './tabs'

const DetailPage = ({
  tabs,
  breadCrumbData,
  detailTabs,
  item
}: { tabs: Tab[], breadCrumbData: BreadCrumbItem[], detailTabs: any, item: any | undefined }) => {

  const [selectedTab, setSelectedTab] = useState(() => {
    return tabs.find((tab: Tab) => tab.selected);
  });

  const renderRelatedTab = () => {
    if (!item || !selectedTab) return null;
    return React.createElement(detailTabs, { item, selectedTab: selectedTab.title });
  }

  return (
    <SafeAreaView className='flex-1 bg-white' edges={['top', 'left', 'right']}>
      <BreadCrumb data={breadCrumbData} />
      <View className='flex-1 bg-white'>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <View className='flex-1 py-8 px-4'>
          {renderRelatedTab()}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailPage