import React, { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, FlatList, Text} from "react-native";
import Card from "../components/Card";

const HomeScreen = props =>
{
  
  var newDatalist = {...props.route.params};

  console.log(newDatalist);
  return(
    <View>
      <Button
        title="Add"
        onPress={()=>{props.navigation.navigate("Add")}}
      />

      
    </View>

  );
}

const styles = StyleSheet.create({});

export default HomeScreen;