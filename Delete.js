import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Delete = () => {

const click=()=>{
    fetch('http://192.168.1.100:3000/student/'+id, {
  method: 'DELETE',
});
}

  const navigation = useNavigation();
  const [id, setId] = useState("");
  const onPress = () => {
    console.log("delete");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* adding background */}

        <ImageBackground
          source={require("./images/delete.png")}
          style={{ width: "100%", height: 700 }}
        >
          <View>
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
              Delete student
            </Text>

            {/* adding txt input */}

            <TextInput
              style={styles.sid}
              label="Enter ID number:"
              value={id}
              onChangeText={(text) => setId(text)}
            />

            {/* adding btn */}

           
            
                <Button
                  style={styles.sbtn}
                  mode="contained-tonal"
                  onPress={click}
                >
                  <Text style={{ fontWeight: "bold" }}>DELETE</Text>
                </Button>
              

          
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("HB");
                  }}
                >
                  <Text
                    style={{
                      marginTop: "8%",
                      marginLeft: "35%",
                      fontSize: 20,
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: "#5c1515",
                    }}
                  >
                    Back to Home...
                  </Text>
                </TouchableOpacity>
           
            </View>
          
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sid: {
    width: "60%",
    marginLeft: "20%",
    marginTop: "10%",
    fontWeight: "bold",
    backgroundColor:"#ff3d74",
  },

  sbtn: {
    width: "24%",
    marginLeft: "38%",
    marginTop: "5%",
    backgroundColor: "red",
    fontWeight: "bold",
  },
});
export default Delete;
