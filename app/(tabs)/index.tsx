import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: null, // hides it
        }}
      />
    </Tabs>
  );
}