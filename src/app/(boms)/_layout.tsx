import { Tabs } from "expo-router";

export default function BoMLayout() {
  return <Tabs>
    <Tabs.Screen name="parts" options={{ title: 'Parts', headerShown: false }} />
    <Tabs.Screen name="assets" options={{ title: 'Assets', headerShown: false }} />
    <Tabs.Screen name="etar" options={{ title: 'ETAR', headerShown: false }} />
  </Tabs>
}