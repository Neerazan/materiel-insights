import { SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useAuthStore } from '@/src/store/auth.store'

const Parts = () => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Button onPress={() => { logout() }}>LogOut</Button>
    </SafeAreaView>
  )
}

export default Parts