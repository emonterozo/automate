import { Tabs, useSegments } from "expo-router";
import { DocumentIcon, HomeIcon, VehicleIcon, PersonIcon } from "@/icons";
import { theme } from "@/theme";

const TABS = [
  {
    name: "home",
    label: "Home",
    icon: <HomeIcon fill={theme.color.neutral.light.dark} width={40} height={40} />,
    iconActive: <HomeIcon fill={theme.color.highlight.darkest} width={40} height={40} />,
  },
  {
    name: "vehicles",
    label: "Vehicles",
    icon: <VehicleIcon fill={theme.color.neutral.light.dark} width={40} height={40} />,
    iconActive: <VehicleIcon fill={theme.color.highlight.darkest} width={40} height={40} />,
  },
  {
    name: "documents/index",
    label: "Documents",
    icon: <DocumentIcon fill={theme.color.neutral.light.dark} width={40} height={40} />,
    iconActive: <DocumentIcon fill={theme.color.highlight.darkest} width={40} height={40} />,
  },
  {
    name: "profile",
    label: "Profile",
    icon: <PersonIcon fill={theme.color.neutral.light.dark} width={40} height={40} />,
    iconActive: <PersonIcon fill={theme.color.highlight.darkest} width={40} height={40} />,
  },
];

export default function TabLayout() {
  const segments = useSegments();
  const isRootTab = segments.length === 2 && ["home", "vehicles", "documents", "profile"].includes(segments[1]);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.color.highlight.darkest,
        tabBarInactiveTintColor: theme.color.neutral.light.dark,
        tabBarLabelStyle: {
          ...theme.typography.body.sm,
          marginTop: 5,
        },
        tabBarIcon: ({ focused }) => {
          const activeTab = TABS.find((tab) => tab.name === route.name);

          return focused ? activeTab?.iconActive : activeTab?.icon;
        },
        tabBarStyle: {
          height: 95,
          paddingTop: 16,
          backgroundColor: theme.color.neutral.light.lightest,
          display: isRootTab ? "flex" : "none",
        },
      })}
    >
      {TABS.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={{ tabBarLabel: tab.label }} />
      ))}
    </Tabs>
  );
}
