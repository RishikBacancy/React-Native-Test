import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList} from "react-native";
import InputField from "../components/InputField";
import Card from "../components/Card";

const AddScreen = ({navigation}) =>
{

  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [phNumber,setPhNumber] = useState("");

  const inputPhHandler = txtInput =>
  {
    setPhNumber(txtInput.replace(/[^0-9]/g, ""));
  };

  const inputFnHandler = txtInput =>
  {
    setFname(txtInput);
  };

  const inputLnHandler = txtInput =>
  {
    setLname(txtInput);
  };

  return(
    <View style={styles.container}>
      <Card>
        <InputField 
          placeholder="First Name" 
          style={styles.input}
          onChangeText={inputFnHandler}
          value={fname}></InputField>

        <InputField 
          placeholder="Last Name" 
          style={styles.input}
          onChangeText={inputLnHandler}
          value={lname}></InputField>

        <InputField 
          placeholder="Phone Number" 
          maxLength={10}
          keyboardType="number-pad" 
          style={styles.input}
          onChangeText={inputPhHandler}
          value={phNumber}></InputField>

        <Button
          title="Save"
          onPress={()=>navigation.navigate("Home",{fname,lname,phNumber })}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
  },
  input:{
    width:200,
    height: 50,
    marginBottom: 10,
  }
});

export default AddScreen;