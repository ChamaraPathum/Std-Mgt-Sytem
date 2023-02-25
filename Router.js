import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import HB from "./HB";
import Login from "./Login";
import Put from "./Put";
import Get from "./Get";
import Delete from "./Delete";

const Stack = createNativeStackNavigator();

const Router=()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="HB" component={HB} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Put" component={Put} />
        <Stack.Screen options={{headerShown:false}} name="Get" component={Get} />
        <Stack.Screen options={{headerShown:false}} name="Delete" component={Delete} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Router;