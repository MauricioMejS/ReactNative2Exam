import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import Loan from "./src/components/Loan/loan";
import Auth from "./src/components/Auth/Auth";
import firebase from "./src/utils/firebase";
import "firebase/auth/";

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <Logout /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

function Logout() {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <View >
      <Loan />
      <Button
        style={styles.submitButton}
        title="cerrar sesión"
        onPress={logout}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  submitButton: {
    position: "absolute",
    bottom: 0,
    
  },
  container: {
    position: "relative",
  },
});
