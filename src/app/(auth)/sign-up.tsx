import { AuthScreenLayout } from '@/src/components/auth-screen-layout';
import CustomInput from '@/src/components/custom-input';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from 'expo-router';
import React from 'react';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from 'react-native';
import { z } from "zod";


const userSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters." })
    .max(30, { message: "First Name must be at most 30 characters." }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters." })
    .max(30, { message: "Last Name must be at most 30 characters." }),
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters." })
    .max(30, { message: "Email must be at most 30 characters." })
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      { message: "Email must be a valid email address." }
    ),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(30, { message: "Username must be at most 30 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(30, { message: "Password must be at most 30 characters." })
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/,
      { message: "Password must contain at least one number, one special character and one uppercase letter." }
    ),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(30, { message: "Password must be at most 30 characters." })
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/,
      { message: "Password must contain at least one number, one special character and one uppercase letter." }
    ),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
})

type UserFormType = z.infer<typeof userSchema>;

const SignUp = () => {
  
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    }
  });

  const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
    reset();
    router.replace("/(auth)/sign-in")
  }

  return (
    <AuthScreenLayout>
      <View className="">
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="First Name"
              placeholder="Enter First Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              showError={!!errors.firstName}
            />
          )}
        />
        {errors.firstName && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.firstName.message}
          </Text>
        )}

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Last Name"
              placeholder="Enter Last Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              showError={!!errors.lastName}
            />
          )}
        />
        {errors.lastName && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.lastName.message}
          </Text>
        )}

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Email"
              placeholder="Enter Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              showError={!!errors.email}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.email.message}
          </Text>
        )}

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Username"
              placeholder="Enter Username"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              showError={!!errors.username}
            />
          )}
        />
        {errors.username && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.username.message}
          </Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Password"
              placeholder="Enter Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              secureTextEntry={true}
              showError={!!errors.password}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.password.message}
          </Text>
        )}

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Confirm Password"
              placeholder="Enter Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              required
              secureTextEntry={true}
              showError={!!errors.confirmPassword}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text className="text-red-500 text-sm mt-1 mb-2">
            {errors.confirmPassword.message}
          </Text>
        )}

        <View className="flex-row justify-end gap-8 mt-2">
          <TouchableOpacity onPress={() => { reset() }}>
            <Text className="text-blue-500 font-medium mt-2">Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 px-6 py-2 rounded-md"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white font-semibold">Register</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 items-center">
          <Text className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={'/(auth)/sign-in'} className="text-blue-500 underline cursor-pointer">Login Here</Link>
          </Text>
        </View>
      </View>
    </AuthScreenLayout>
  )
}

export default SignUp