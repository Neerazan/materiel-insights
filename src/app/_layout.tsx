import { Stack } from "expo-router";
import './global.css'
import { useAuthStore } from "../store/auth.store";

export default function RootLayout() {

  const { isLoggedIn } = useAuthStore();

  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Protected guard={isLoggedIn}>
      <Stack.Screen name="(boms)" />
    </Stack.Protected>
    <Stack.Screen name="(auth)" />
  </Stack>;
}
