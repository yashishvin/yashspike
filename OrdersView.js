import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
//This is the staff view for the orders
class OrdersView extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",//states need to be set according to the api call being made
      lastName: "",
      
    }
  }

 //This component is responsible for the orders viewed by the restraunt staff
 //component to display can be called or a function within this class can be called to display
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text >This is the order page which will be viewed by the restraunt Staff </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
});

export default OrdersView;
