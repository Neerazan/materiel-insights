import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import CustomInput from "@/src/components/custom-input"
import { Link, router } from "expo-router"
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/src/store/auth.store";
import { AuthScreenLayout } from "@/src/components/auth-screen-layout";

export default function LoginForm() {
  const userSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." })
      .max(30, { message: "Username must be at most 30 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(30, { message: "Password must be at most 30 characters." }),
  });

  type UserFormType = z.infer<typeof userSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  });


  const { login } = useAuthStore();

  const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
    login();
    reset();
    router.replace("/(boms)/parts");
  };

  const handleClear = () => {
    reset();
  };

  return (
    <AuthScreenLayout>
      <View className="">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Username"
              placeholder="Enter username"
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

        <View className="flex-row justify-end gap-8 mt-2">
          <TouchableOpacity onPress={handleClear}>
            <Text className="text-blue-500 font-medium mt-2">Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 px-6 py-2 rounded-md"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 items-center">
          <Text className="text-sm text-gray-600">
            Do not have an account?{" "}
            <Link href={'/(auth)/sign-up'} className="text-blue-500 underline cursor-pointer">
              Register Here
            </Link>
          </Text>
        </View>
      </View>
    </AuthScreenLayout>
  )
}