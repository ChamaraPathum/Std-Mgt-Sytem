import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Button } from "react-native-paper";
import {useNavigation} from "@react-navigation/native"

const HB = () => {

  const navigation=useNavigation();

  return (
    <View>
      {/* adding background image   */}

      <ImageBackground
        source={require("./scl.png")}
        resizeMode="cover"
        style={{
          width: 430,
          height: 710,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* addind header */}
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          students Registration
        </Text>

        {/* adding bttn */}

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button
              mode="contained-tonal"
              onPress={() => {navigation.navigate("Login")} }
              style={{
                width: "70%",
                marginLeft: "10%",
                padding: "5%",
                marginTop: "40%",
                backgroundColor:"#f2a8ff"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Add</Text>
            </Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button
              mode="contained-tonal"
              onPress={() =>{navigation.navigate("Put")}}
              style={{
                width: "70%",
                marginLeft: "15%",
                padding: "5%",
                marginTop: "40%",
                backgroundColor:"#f2a8ff"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit</Text>
            </Button>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button
             mode="contained-tonal"
              onPress={() => {navigation.navigate("Get")}}
              style={{
                width: "70%",
                marginLeft: "10%",
                padding: "5%",
                marginTop: "-40%",
                backgroundColor:"#f2a8ff"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Get</Text>
            </Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button
             mode="contained-tonal"
              onPress={() =>{navigation.navigate("Delete")}}
              style={{
                width: "70%",
                marginLeft: "15%",
                padding: "5%",
                marginTop: "-40%",
                backgroundColor:"#f2a8ff"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Delete</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HB;
