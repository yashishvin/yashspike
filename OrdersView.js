import Ordersdisplay from './Ordersdisplay'
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
  fetch()
  {// the component responsible for getting the data
    var ar= {
      Order:[{
      "name":"MCD",
      "OrderStatus":'order placed'
      }]
    }
    console.log("the fetch method for the order has been executed")
    var c=[]
    c=ar.Order
    var i
    var disp=[]
    for (i in c)
    { 
     disp.push(<Ordersdisplay name={c[i].name} OrderStatus={c[i].OrderStatus}/>)
    }
     return disp;
 }

  

 //This component is responsible for the orders viewed by the restraunt staff
 //component to display can be called or a function within this class can be called to display
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text style={styles.text} >This Is The page To View Order</Text>
        {this.fetch()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
  text:
  {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default OrdersView;
