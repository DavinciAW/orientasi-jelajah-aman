import { StyleSheet, Text, View } from "react-native";
import { LaporanUdara } from "../../types/cuaca";

interface IndikatorAQIProps {
  laporan: LaporanUdara;
}

const warnaTingkat: Record<LaporanUdara["tingkat"], string> = {
  BAIK: "#16803C",
  SEDANG: "#B26A00",
  TIDAK_SEHAT: "#C62828",
  BERBAHAYA: "#7B1FA2",
};

export default function IndikatorAQI({ laporan }: IndikatorAQIProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kualitas udara</Text>
      <Text style={[styles.status, { color: warnaTingkat[laporan.tingkat] }]}>
        AQI {laporan.indeksAQI} - {laporan.tingkat}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    color: "#475569",
    fontSize: 14,
  },
  status: {
    fontSize: 18,
    fontWeight: "600",
  },
});
