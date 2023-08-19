import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";

const ContactRow = ({ name, subtitle,onPress }) => {
  let firstLetters = '';

  if (name && name.trim() !== '') {
    const nameParts = name.split(' ');
    if (nameParts.length >= 2) {
      firstLetters = nameParts.reduce((prev, current) => `${prev}${current[0]}`, '');
    } else {
      firstLetters = nameParts[0][0];
    }
  }
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>

      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>{firstLetters}</Text>
      </View>

      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

export default ContactRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: "#565656",
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
  textsContainer: {
    flex: 1,
    marginStart: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLabel: {
    fontSize: 20,
    color: "white",
  },
});
