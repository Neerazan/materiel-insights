import { useAuthStore } from "@/src/store/auth.store";
import { Stack } from "expo-router";

export default function AuthLayout() {

  const { hasAgreedToTerms, isLoggedIn } = useAuthStore();

  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Protected guard={!hasAgreedToTerms && !isLoggedIn}>
        <Stack.Screen name="terms" />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn && hasAgreedToTerms}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack.Protected>
    </Stack>
  )
}