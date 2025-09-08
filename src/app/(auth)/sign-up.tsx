import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '@/src/components/custom-input'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className="">
      <CustomInput
        label="First Name"
        placeholder="Enter First Name"
        required
      />

      <CustomInput
        label="Last Name"
        placeholder="Enter Last Name"
        required
      />

      <CustomInput
        label="Email"
        placeholder="Enter Email"
        required
      />

      <CustomInput
        label="Username"
        placeholder="Enter Username"
        required
      />

      <CustomInput
        label="Password"
        placeholder="Enter Password"
        required
        secureTextEntry={true}        
      />

      <CustomInput
        label="Confirm Password"
        placeholder="Enter Password"
        required
        secureTextEntry={true}
      />

      <View className="flex-row justify-end gap-8 mt-2">
        <TouchableOpacity onPress={() => { }}>
          <Text className="text-blue-500 font-medium mt-2">Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 px-6 py-2 rounded-md"
          onPress={() => { }}
        >
          <Text className="text-white font-semibold">Register</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-6 items-center">
        <Text className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href={'/(auth)'} className="text-blue-500 underline cursor-pointer">Login Here</Link>
        </Text>
      </View>
    </View>
  )
}

export default SignUp