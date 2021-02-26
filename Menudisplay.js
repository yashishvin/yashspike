import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
//This component is responsible for the components to be displayed on the menu page
class Menudisplay extends React.Component {

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
    }
  }
  render() 
      {console.log("the name of the dish is "+this.props.name);
    return (
      <View>
         <Card>
    <Card.Title><Text>The name of the dish is: {this.props.name}</Text></Card.Title>
             <Text>Order Status: {this.props.OrderStatus}</Text> 
             <Image source={{uri:this.props.url}}
               />
     </Card>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
});

export default Menudisplay;
