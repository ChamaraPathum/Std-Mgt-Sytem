import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Put = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const click = () => {
    fetch("http://192.168.1.100:3000/student/" + id, {
      method: "PUT",
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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* adding background image */}

        <ImageBackground
          source={require("./images/back.png")}
          style={{
            width: "100%",
            height: "100%",
            marginTop: "0%",
            marginBottom: "62%",
          }}
        >
          {/* adding header */}

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 26,
                textAlign: "center",
                fontWeight: "900",
                marginTop: "0%",
                color: "#3f423e",
                fontStyle: "italic",
              }}
            >
              Editing Page
            </Text>

            {/* adding txt input */}

            <TextInput
              style={styles.sid}
              label="Updating ID:"
              value={id}
              onChangeText={(text) => setId(text)}
            />

            <TextInput
              style={styles.sname}
              label="Enter your new Name:"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={styles.saddress}
              label="Enter your new address:"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />

            <TextInput
              style={styles.semail}
              label="Enter your new email:"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Button
                  style={styles.sbtn}
                  mode="contained-tonal"
                  onPress={click}
                >
                  <Text style={{fontWeight:"bold"}}>Submit</Text>
                </Button>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("HB");
                  }}
                >
                  <Text
                    style={{
                      marginTop: "25%",
                      marginLeft: "13%",
                      fontSize: 17,
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: "#5c1515",
                    }}
                  >
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sid: {
    width: "70%",
    marginLeft: "15%",
    marginTop: "10%",
    fontWeight:"bold",
    backgroundColor:"#b1fcf5",
  },

  sname: {
    width: "70%",
    marginLeft: "15%",
    marginTop: "5%",
    fontWeight:"bold",
    backgroundColor:"#b1fcf5",
  },

  saddress: {
    width: "70%",
    marginLeft: "15%",
    marginTop: "5%",
    fontWeight:"bold",
    backgroundColor:"#b1fcf5",
  },

  semail: {
    width: "70%",
    marginLeft: "15%",
    marginTop: "5%",
    fontWeight:"bold",
    backgroundColor:"#b1fcf5",
  },

  sbtn: {
    width: "60%",
    marginLeft: "30%",
    marginTop: "20%",
    backgroundColor: "#f2a8ff",
    
  },
});

export default Put;
