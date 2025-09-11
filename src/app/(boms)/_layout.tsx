import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BoMLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#808080',
        }}
      >
        <Tabs.Screen
          name="parts"
          options={{
            title: 'Parts',
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              <Ionicons
                name={focused ? 'cog' : "cog-outline"}
                size={24}
                color={color}
              />
          }}
        />
        <Tabs.Screen
          name="assets"
          options={{
            title: 'Assets',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <Ionicons
              name={focused ? 'tablet-landscape' : "tablet-landscape-outline"}
              size={24}
              color={color}
            />
          }}
        />
        <Tabs.Screen
          name="drawings"
          options={{
            title: 'Drawings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <Ionicons
              name={focused ? 'compass' : "compass-outline"}
              size={24}
              color={color}
            />
          }}
        />
        <Tabs.Screen
          name="structure"
          options={{
            title: 'Structure',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <Ionicons
              name={focused ? 'add-circle' : "add-circle-outline"}
              size={24}
              color={color}
            />
          }}
        />
      </Tabs>
    </>)
}