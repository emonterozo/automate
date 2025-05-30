import { useUserStore } from "@/store/userStore";
import { Redirect } from "expo-router";

export default function Index() {
  const { user } = useUserStore();

  return <Redirect href={user ? "/(tabs)/home" : "/auth/login"} />;
}
