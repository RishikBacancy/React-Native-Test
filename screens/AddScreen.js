import React, { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, Modal} from "react-native";
import InputField from "../components/InputField";
import Card from "../components/Card";

const AddScreen = props =>
{
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [phNumber,setPhNumber] = useState("");

  var oldData = props.route.params;

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

  const saveHandler = () =>
  {
    console.log(props.route.params);

    var curData = [{
      fname: fname,
      lname: lname,
      phNumber: phNumber
    }];

    if(typeof(oldData) === "undefined"){
      oldData.push(curData);
    } else {
      oldData.push.apply(oldData,curData); 
    }
  
    props.navigation.navigate("Home", oldData);
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
          onPress={saveHandler}
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