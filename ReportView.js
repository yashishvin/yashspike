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

  
   //This component is responsible for generating the reports
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <Text >This is the Report page to be viewed by the admin</Text>
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
