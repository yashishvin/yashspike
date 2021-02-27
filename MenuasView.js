import Menuasdisplay from './Menuasdisplay'
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

class MenuasView extends React.Component {

  
   
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      goalDailyCalories: 0.0,
      goalDailyProtein: 0.0,
      goalDailyCarbohydrates: 0.0,
      goalDailyFat: 0.0,
      goalDailyActivity: 0.0
    }
  }
  fetch()
  {// the component responsible for getting the data
    var ar= {
      Order:[{
      "name":"MCD",
      "OrderStatus":'order placed',
       "time":"1745",
       "cost":1500
      }]
    }
    console.log("the fetch method for the order has been executed")
    var c=[]
    c=ar.Order
    var i
    var disp=[]
    for (i in c)
    { 
     disp.push(<Menuasdisplay name={c[i].name} OrderStatus={c[i].OrderStatus} cost={c[i].cost}/>)
    }
     return disp;
 }

  // The component where the menu to be viewed by the staff and admin is set up
  //component to display can be called or a function within this class can be called to display
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text style={styles.text}>This is the menu page to be viewed by the admin and the staff </Text>
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
  {alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default MenuasView;
