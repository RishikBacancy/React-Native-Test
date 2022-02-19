import React, { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, FlatList, Text} from "react-native";
import Card from "../components/Card";

const HomeScreen = props =>
{

  var detalis = [];
  const [length,setLength] = useState(0);

  if(typeof(props.route.params) != "undefined"){
    detalis = props.route.params;
    console.log(detalis);
    console.log("-------"+detalis.length);
  }


  return( 
    <View style={styles.container}>
      <FlatList 
        data={detalis}
        renderItem={itemData => (
          <Card style={styles.cardContainer}>
              <Text style={styles.txtContainer}>First Name: {itemData.item.fname}</Text>
              <Text style={styles.txtContainer}>Last Name: {itemData.item.lname}</Text>
              <Text style={styles.txtContainer}>Phone : {itemData.item.phNumber}</Text>
          </Card>
        )}
      ></FlatList> 

      <Button
        title="Add"
        disabled={length===10}
        onPress={()=>{setLength(length+1); props.navigation.navigate("Add",detalis);}}
      /> 
    </View>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
  },
  cardContainer:{
    margin:5,
  },
  txtContainer:{
    fontSize:15,
  }
});

export default HomeScreen;