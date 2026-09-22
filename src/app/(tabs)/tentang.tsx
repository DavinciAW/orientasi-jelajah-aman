// app/(tabs)/tentang.tsx
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, typeScale } from "../../constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView
      style={{ flex: 1, padding: spacing.sedang, gap: spacing.kecil }}
    >
      <Text
        accessibilityLabel="Judul halaman Tentang Aplikasi"
        style={{ fontSize: typeScale.judul, fontWeight: "bold" }}
      >
        Tentang Aplikasi
      </Text>

      <Text style={{ fontSize: typeScale.subjudul, fontWeight: "600" }}>
        Jelajah Aman
      </Text>

      <Text style={{ fontSize: typeScale.isi }}>Versi: 1.0.0</Text>

      <Text style={{ fontSize: typeScale.isi }}>Pembuat: Davin Aurellio W</Text>
    </SafeAreaView>
  );
}
