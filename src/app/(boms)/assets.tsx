import { SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useAuthStore } from '@/src/store/auth.store'

const Assets = () => {
  const { logout, resetAll } = useAuthStore();

  return (
    <SafeAreaView className='flex-1 items-center justify-center gap-6'>
      <Button onPress={() => { logout() }}>LogOut</Button>
      <Button onPress={() => { resetAll() }}>Reset</Button>
    </SafeAreaView>
  )
}

export default Assets