import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ContactRow from "../src/components/ContactRow";
import Separator from "./../src/components/Separator";
import firebase from "firebase";
import { colors } from "../src/config/constants";
const chats = [
  {
    user: ["suleyman@gmail.com", "a@gmail.com"],
    messages: [{}],
  },
  {
    user: ["suleyman@gmail.com", "b@gmail.com"],
    messages: [{}],
  },
  {
    user: ["suleyman@gmail.com", "c@gmail.com"],
    messages: [{}],
  },
  {
    user: ["suleyman@gmail.com", "d@gmail.com"],
    messages: [{}],
  },
];
const Chats = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate("SignUp");
      }
    });
  }, []);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
      .firestore()
      .collection("chats")
      .where("users", "array-contains", user.email)
      .onSnapshot((snapshot) => {
        setChats(snapshot.docs);
      });
    })
   
  }, []);

  const handleFabPres = () => {
    Alert.prompt("Email", "Enter user email", (email) => {
      firebase
        .firestore()
        .collection("chats")
        .add({
          users: [firebase.auth()?.currentUser?.email, email],
          messages: [],
        })
        .then((doc) => {
          navigation.navigate("Chat", { id: doc.id });
        });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {chats.map((chat, index) => (
        <React.Fragment key={chat.id}>
          <ContactRow
            name={
              chat.data.user.find(
                (x) => x !== firebase.auth()?.currentUser?.email
              )[0]
            }
            subtitle={chat.data().messages.length===0?"No Messaged":chat.data().messages[chat.data().messages.length-1].text}
            onPress={() => {
              navigation.navigate("Chat", { id: chat.id });
            }}
          />
          <Separator />
        </React.Fragment>
      ))}
      <TouchableOpacity style={styles.fab} onPress={handleFabPres}>
        <View style={styles.fabContainer}>
          <Ionicons name="add" size={24} color={"white"} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabContainer: {
    width: 56,
    height: 56,
    backgroundColor: colors.pink,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    bottom: 16,
    right: 16,
  },
});

export default Chats;
