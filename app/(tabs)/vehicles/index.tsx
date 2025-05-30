import { useRouter } from "expo-router";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const vehicles = [
  { id: "1", name: "Honda CB500" },
  { id: "2", name: "Toyota Corolla" },
];

export default function VehiclesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/(tabs)/vehicles/${item.id}`)}>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
