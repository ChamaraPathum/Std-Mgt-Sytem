import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const Onlogin = () => {
    fetch("http://192.168.43.227:3000/student", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        address: address,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
     
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInput
            style={styles.sid}
            label="Enter your ID number:"
            value={id}
            onChangeText={(text) => setId(text)}
          />

          <TextInput
            style={styles.sname}
            label="Enter your Name:"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.saddress}
            label="Enter your address:"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />

          <TextInput
            style={styles.semail}
            label="Enter your email:"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Button style={styles.sbtn} mode="elevated" onPress={Onlogin}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sid: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "10%",
  },

  sname: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "5%",
  },

  saddress: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "5%",
  },

  semail: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "5%",
  },

  sbtn: {
    width: "30%",
    marginLeft: "35%",
    marginTop: "5%",
  },
});

export default Add;
