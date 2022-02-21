import React, {useEffect, useState} from "react";
import { View, Button, StyleSheet, FlatList, Text} from "react-native";
import Card from "../components/Card";

const HomeScreen = props =>
{

  var details = [];
  const [length,setLength] = useState(0);

  if(typeof(props.route.params) != "undefined"){
    details = props.route.params;
  }

  useEffect(() => {
    
    props.navigation.addListener("focus", () => {
      if(typeof(details) != "undefined"){
        setLength(details.length);
      }
    });
    
  },[props.navigation]);  
  
  console.log(details);
  console.log("+++++++"+details.length+"+++++++");

  return( 
    <View style={styles.container}>
      <FlatList 
            data={details}
            renderItem={itemData => (
            <Card style={styles.cardContainer}>
                <Text style={styles.txtContainer}>First Name : <Text style={styles.txtItemContainer}>{itemData.item.fname}</Text></Text>
                <Text style={styles.txtContainer}>Last Name : <Text style={styles.txtItemContainer}>{itemData.item.lname}</Text></Text>
                <Text style={styles.txtContainer}>Phone : <Text style={styles.txtItemContainer}>{itemData.item.phNumber}</Text></Text>
            </Card>
            )}
      ></FlatList> 

      <View style={styles.btnContainer}>
        <Button
          title="Add"
          disabled={length === 10}
          onPress={()=>{props.navigation.navigate("Add",details);}}
        /> 
      </View>
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
    color:"black",
  },
  txtItemContainer:{
    color:"gray",
  },
  btnContainer:{
    width: 150,
    marginTop: 15,
    marginBottom: 10,
    alignSelf:"center",
  }
});

export default HomeScreen;