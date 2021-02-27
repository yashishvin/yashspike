import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
//This component is responsible for the components to be displayed on the menu page
class Ordersdisplay extends React.Component {

  /**
   * Specifies the default values that will be shown for a split second
   * while data is loading in from the server.
   */
  constructor(props) 
  {
    
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      url:this.props.url,
      
    }
  
  }
  completeorder()
  {console.log("the complete order funcion has been called")
  console.log("the function has been excuted sucessfully")
  }
  render() 
      {console.log("the render method here is executed")
    return (
      <View>
         <Card>
    <Card.Title><Text>{this.props.name}</Text></Card.Title>
             <Text>The Name of the dish is:{this.props.name}</Text> 
             <View style={styles.space} />
              <Text>The Name of the customer  is:</Text>
              <View style={styles.space} />
              <Text>The delivery time is:</Text>
              <View style={styles.space} />
              <Text> The status of the Order is:{this.props.OrderStatus}</Text>
              <View style={styles.space} />
              <Button color="#942a21" style={styles.buttonInline} title="Complete Order" onPress={this.completeorder.bind()}/>
               </Card>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
  buttonInline: {
  
    width: 200,
      padding: 10,
      margin: 5,
      height: 40,
  },
  space: {
    width: 20,
    height: 20,
  },
   input: {
    width: 200,
    padding: 10,
    margin: 5,
    height: 40,
    borderColor: '#c9392c',
    borderWidth: 1
  }
});

export default Ordersdisplay;
