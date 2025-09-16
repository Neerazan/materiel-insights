import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useAuthStore } from "../store/auth.store";
import './global.css';

export default function RootLayout() {

  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <StatusBar
        barStyle="light-content"
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(boms)" />
        </Stack.Protected>
        <Stack.Screen name="(auth)" />
      </Stack>
    </>
  )
}
