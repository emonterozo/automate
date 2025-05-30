import { Text, Button, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";

export default function LoginScreen() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = () => {
    setUser({ id: "123", name: "John Doe" });
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}
