import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
//This component is responsible for the components to be displayed on the menu page
class Reportdisplay extends React.Component {
  constructor(props) 
  {
    
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      url:this.props.url,
      
    }
  
  }
  render() 
      {console.log("the render method here is executed")
    return (
      <View>
         <Card>
    <Card.Title><Text>{this.props.name}</Text></Card.Title>
             <Text>The Total sales for today is:{this.props.number}</Text> 
              <View style={styles.space} />
              <Text>The delivery time is:{this.props.cost}</Text>
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

export default Reportdisplay;
