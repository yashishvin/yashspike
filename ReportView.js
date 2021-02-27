import Reportdisplay from './Reportdisplay'
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
class ReportView extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      firstName: "",//states need to be changed according t the api calls
      lastName: "",
      
    }
  }
  fetch()
  {
    console.log("the fetch in the report method has been executed");
    var ar= {
      Order:[{
      "name":"MCD",
      "Cost":123333,
      "OrderStatus":"order placed"
      }]
    }
    console.log("the fetch method for the order has been executed");
    var c=[]
    c=ar.Order
    console.log("the length of the Json array is"+c.length);
    var i
    var disp=[]
    for (i in c)
    { 
     disp.push(<Reportdisplay number={c.length} cost={c[i].cost}/>)
    }
     return disp;

  }

  
   //This component is responsible for generating the reports
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text >This is the Report page to be viewed by the admin</Text>
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

export default ReportView;
