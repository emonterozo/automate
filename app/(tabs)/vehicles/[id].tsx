import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function VehicleDetails() {
  const params = useLocalSearchParams();
  const { id } = params;

  return (
    <SafeAreaView>
      <Text>Vehicle Details for ID: {id}</Text>
      {/* Your vehicle details UI */}
    </SafeAreaView>
  );
}
