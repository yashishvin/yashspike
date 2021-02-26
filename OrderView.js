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
