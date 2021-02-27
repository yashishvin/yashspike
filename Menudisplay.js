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
      time:"1735",
      url:"https://www.youtube.com/watch?v=zhzVF8Yo9aQ"
    }
  
  }
  placeorder(itemname,time)
   {console.log("the button has been pressed and the properties are as follows")
     console.log(itemname);
     console.log(time);
     //post request to be added here
    }
  render() 
      {
    return (
      <View>
         <Card>
    <Card.Title><Text>{this.props.name}</Text></Card.Title>
             <Text>The Status of the order in minutes is:{this.props.OrderStatus}</Text> 
             <View style={styles.space} />
              <Text>The Cost of the item is:{this.props.cost}</Text>
              <View style={styles.space} />
              <Text>Enter the delivery time below:</Text>
              <View style={styles.space} />
              <TextInput style={styles.input}
             underlineColorAndroid="transparent"
              placeholder="Time for delivery"
             placeholderTextColor="#992a20"
             onChangeText={(time) => this.setState({time:time})}
             value={this.state.time}
             autoCapitalize="none" />
             <View style={styles.space} />
             <Text>View the image by following the url:</Text>
             <View style={styles.space} />
             <TextInput style={styles.input}
             underlineColorAndroid="transparent"
             placeholder="image url"
             placeholderTextColor="#992a20"
             onChangeText={(url) => this.setState({url:url})}
             value={this.state.url}
             autoCapitalize="none" />
             <View style={styles.space} />
              <Button color="#942a21" style={styles.buttonInline} title="Place Order" onPress={this.placeorder.bind(this.props.name,this.state.time)}/>
              <View style={styles.space} />
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

export default Menudisplay;

