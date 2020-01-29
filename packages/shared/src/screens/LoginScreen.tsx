import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const globalAny: any = global;
const LoginScreen = () => {
  const isHermes = globalAny.HermesInternal;
  if (isHermes != false) {
    console.log(isHermes);
  }
  //console.log(isHermes);
  return (
    <View>
      <TouchableOpacity>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
