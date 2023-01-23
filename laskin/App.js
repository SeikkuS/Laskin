import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  sum = () => {
    result = input1 + input2;
    alert(result);
  }

  subtract = () => {
    result = input1 - input2;
    alert(result);
  }
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=" enter first number"
        numeric
        keyboardType={'numeric'}
        style = {{width:200, borderColor: 'gray', borderWidth: 1}}
        value = {input1}
        onChangeText = {text => setInput1(text)}
      />

      <TextInput
        placeholder=" enter second number"
        numeric
        keyboardType={'numeric'}
        style = {{width:200, borderColor: 'gray', borderWidth: 1}}
        value = {input2}
        onChangeText = {text => setInput2(text)}
      />
      <View style = {{flexDirection: "row" }}>
        <Button variant="outlined" title=" + " onPress={this.sum}></Button>
        <Text>      </Text>
        <Button variant="outlined" title=" - " onPress={this.subtract}></Button>
      </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
