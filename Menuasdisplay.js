import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
//This component is responsible for the components to be displayed on the menu page
class Menuasdisplay extends React.Component {

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
      url:"https://www.youtube.com/watch?v=zhzVF8Yo9aQ",
      name:this.props.name,
      cost:this.props.cost
      
    }
  
  }
  deleteitem()
  {
    console.log("the delete function in the admin staff view has been called has been called")


  }
 
  render() 
      {console.log("the render method here is executed")
    return (
      <View>
         <Card>
    <Card.Title><Text>{this.props.name}</Text></Card.Title>
             <Text>The Name of the Dish is</Text> 
             <TextInput style={styles.input}
             underlineColorAndroid="transparent"
             placeholder="name of the dish"
             placeholderTextColor="#992a20"
             onChangeText={(name) => this.setState({name:name})}
             value={this.props.name}
             autoCapitalize="none" />
             <View style={styles.space} />
              <Text>The Cost of the item is</Text>
              <TextInput style={styles.input}
             underlineColorAndroid="transparent"
             placeholder="Cost of the item"
             placeholderTextColor="#992a20"
             onChangeText={(cost) => this.setState({cost:cost})}
             value={this.props.cost}
             autoCapitalize="none" />
              <View style={styles.space} />
              <View style={styles.space} />
              <TextInput style={styles.input}
             underlineColorAndroid="transparent"
             placeholder="image url"
             placeholderTextColor="#992a20"
             onChangeText={(url) => this.setState({url:url})}
             value={this.state.url}
             autoCapitalize="none" />
             <View style={styles.space} />
              <Button color="#942a21" style={styles.buttonInline} title="Remove item from menu" onPress={this.deleteitem.bind()}/>
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

export default Menuasdisplay;
