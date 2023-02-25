import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Get = () => {
  const [deta, setDeta] = useState([]);

  const click = () => {
    fetch("http://192.168.1.100:3000/student/" + id)
      .then((response) => response.json())
      .then((json) => {
        json.map((val) => {
          console.log(json), console.log(val), setDeta(val);
        });
      });
    //  const [deta, setDeta] = useState("json");
  };

  const navigation = useNavigation();

  const [id, setId] = useState("");
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          {/* adding background image */}
          <ImageBackground
            source={require("./images/back.png")}
            style={{ width: "100%", height: 700 }}
          >
            {/* adding header */}

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
              Get details
            </Text>

            {/* adding txt imput */}

            <TextInput
              style={styles.sid}
              label="Enter ID:"
              value={id}
              onChangeText={(text) => setId(text)}
            />

            {/* addin btn */}

            <Button style={styles.sbtn} mode="contained-tonal" onPress={click}>
              <Text style={{ fontWeight: "bold" }}>Click</Text>
            </Button>

            <TextInput
              style={styles.sdetails}
              label="Student Name:"
              value={deta.name}
            />
            <TextInput
              style={styles.sdetails}
              label="Student Adress:"
              value={deta.address}
            />
              <TextInput
              style={styles.sdetails}
              label="Student Email:"
              value={deta.email}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HB");
              }}
            >
              <Text
                style={{
                  marginTop: "5%",
                  marginLeft: "48%",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "#5c1515",
                }}
              >
                Back to Home...
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Get;

const styles = StyleSheet.create({
  sid: {
    width: "70%",
    marginLeft: "15%",
    marginTop: "10%",
    fontWeight: "bold",
    backgroundColor:"#b3faaa",
  },

  sdetails: {
    width: "70%",
    height: 50,
    marginLeft: "15%",
    marginTop: "8%",
    fontWeight: "bold",
    backgroundColor:"#b3faaa",
  },

  sbtn: {
    width: "30%",
    marginLeft: "35%",
    marginTop: "5%",
    backgroundColor: "#f2a8ff",
    fontWeight: "bold",
  },
});
