import Orderdisplay from './Orderdisplay'
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

class OrderView extends React.Component {

  /**
   * Specifies the default values that will be shown for a split second
   * while data is loading in from the server.
   */
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",// The state need ot be changed
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
     disp.push(<Orderdisplay name={c[i].name} OrderStatus={c[i].OrderStatus}/>)
    }
     return disp;
 }

  /**
   * The fetch request of the data from the endpoint order will be done in the following method
   * *componentDidMount()
   {
        
    this._navListener = this.props.navigation.addListener('focus', () => {
        this.GetInfo();
    })
   }
   */
  

  
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text >This is the page to view your order</Text>
        {this.fetch()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
});

export default OrderView;
