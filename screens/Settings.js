import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ContactRow from "../src/components/ContactRow";
import { colors } from "../src/config/constants";
import Separator from "../src/components/Separator";
import Cell from "../src/components/Cell";

const Settings = () => {
  return (
    <SafeAreaView>
      <ContactRow
        name="Süleyman Aslan"
        style={styles.contactRow}
        subtitle="suleymanaslan@gmail.com"
      />

      <Separator />
      <Cell
        icon="log-out-outline"
        title="Logout"
        tintcolor={colors.red}
        onPress={() => {
          alert("Dont touch me again");
        }}
      />

      <Separator />
      <Cell
        icon="information-outline"
        title="Help"
        tintcolor={colors.green}
        onPress={() => {
          alert("Dont touch me again");
        }}
        style={{marginTop:20}}
      />

      <Separator />
      <Cell
        icon="heart-outline"
        title="Tell a Friend"
        tintcolor={colors.pink}
        onPress={() => {
          alert("Dont touch me again");
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
});
