import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Button } from "react-native-paper";
import HB from "./HB";

const Home = () => {
  return (
    
    <View style={{ flex: 1 }}>
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1}}>
            <Button
              style={{marginTop: "100%",marginLeft:"15%",width:"100%",backgroundColor:"#355405"}}
             
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Add student
            </Button>
          </View>
          <View style={{ flex: 1}}>
            <Button
              style={{ marginTop: "100%",marginLeft:"18%", width:"100%",backgroundColor:"#355405" }}
              
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Edit details
            </Button>
          </View>
        </View>
       
      </View>
      
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1}}>
            <Button
              style={{ marginTop: "100%",width:"100%",marginLeft:"15%",backgroundColor:"#355405" }}
             
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Get details
            </Button>
          </View>
          <View style={{ flex: 1}}>
            <Button
              style={{ marginTop: "100%",width:"100%",marginLeft:"18%",backgroundColor:"#355405" }}
            
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Delete details
            </Button>
          </View>
        </View>
      
      </View>
  

      </ImageBackground>
     
    </View>
    
  );
};

export default Home;
{
  /* <Button style={{marginTop:"0%"}} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Press me</Button>    */
}
