import { Tabs } from "expo-router";
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';

export default function BoMLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#808080',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="parts/index"
          options={{
            title: 'Parts',
            tabBarIcon: ({ color, focused }) =>
              <FontAwesome
                name={'cog'}
                size={24}
                color={focused ? '#3B82F6' : color}
              />
          }}
        />
        <Tabs.Screen
          name="assets/index"
          options={{
            title: 'Assets',
            tabBarIcon: ({ color, focused }) => <FontAwesome
              name={'table'}
              size={24}
              color={focused ? '#3B82F6' : color}
            />
          }}
        />
        <Tabs.Screen
          name="drawings/index"
          options={{
            title: 'Drawings',
            tabBarIcon: ({ color, focused }) => <FontAwesome6
              name={'compass-drafting'}
              size={24}
              color={focused ? '#3B82F6' : color}
            />
          }}
        />
        <Tabs.Screen
          name="structure/index"
          options={{
            title: 'Structure',
            tabBarIcon: ({ color, focused }) => <FontAwesome6
              name={'folder-tree'}
              size={24}
              color={focused ? '#3B82F6' : color}
            />
          }}
        />
      </Tabs>
    </>)
}