import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList} from "react-native";

const HomeScreen = ({navigation,route}) =>
{

  const details = route.params;
  const [detail,setDetail] = useState(route.params);

  return(
    <View>
      <Button
        title="Add"
        onPress={()=>{navigation.navigate("Add")}}
      />

      <FlatList data={details}
        renderItem={item => {
          <View>
            <Text>{item.item}</Text>
          </View>
        }}></FlatList>

    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;