
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import base64 from 'base-64';
class LoginView extends React.Component{  
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      permission: "Admin"//this needs to be set from the api 
    }

    this.userLogin = this.userLogin.bind(this);
    this.adminlogin = this.adminlogin.bind(this);
    this.stafflogin=this.stafflogin.bind(this);
  }
  userLogin() {
    console.log("the user login button has been pressed")
    var a="User"
   this.props.setpermission(a)
   this.props.navigation.navigate('SignIn')
  }
  adminlogin() {
      console.log("the admin loin button has been pressed")
      var b="Admin"
      this.props.setpermission(b)
      this.props.navigation.navigate('SignIn')
  }
  stafflogin() {
     console.log("the staff login button has been pressed")
      var c="Staff"
      this.props.setpermission(c)
      this.props.navigation.navigate('SignIn')
      }

  /**
   * Displays and collects the login information.
   * 
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Badger Bytes</Text>
        <Text>Welcome! Please Choose what you would like to login or signup as.</Text>
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button color="#942a21" style={styles.buttonInline} title="User" onPress={this.userLogin.bind()} />
          <View style={styles.spaceHorizontal} />
          <Button color="#942a21" style={styles.buttonInline} title="Staff" onPress={this.stafflogin.bind()} />
          <View style={styles.spaceHorizontal} />
          <Button color="#942a21" style={styles.buttonInline} title="Admin" onPress={this.adminlogin.bind()} />
        </View>
      </View>
    );
  }




}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigText: {
      fontSize: 32,
      fontWeight: "700",
      marginBottom: 5
    },
    space: {
      width: 20,
      height: 20,
    },
    spaceHorizontal: {
      display: "flex",
      width: 20
    },
    buttonInline: {
      display: "flex"
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
  
  export default LoginView;
  