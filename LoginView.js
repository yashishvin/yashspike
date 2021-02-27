
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import base64 from 'base-64';
class LoginView extends React.Component{  
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      permission: "User"//this needs to be set from the api 
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }


   // This is a mock api which needs to be replaced by the api which we create
  handleLogin() {
    fetch('https://mysqlcs639.cs.wisc.edu/login', { // TODO Delete
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + base64.encode(this.state.username + ":" + this.state.password)
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          this.props.login(this.state.username, res.token);
          //Code needed to be added to set the state of permission from the api 
          //check the permissions that the user has and navigate accordingly
          if(this.state.permission=="User")
          {console.log("the user page has been executed")
          this.props.navigation.navigate('UserView');
          }
          else if(this.state.permission=="Admin")
          {console.log("this is the page for the admin which is being executed")
          this.props.navigation.navigate('AdminView');
          }
          else if(this.state.permission=="Staff")
          {
           console.log("this is the staff page")
           this.props.navigation.navigate('StaffView');
          }
        } else {
          alert("Incorrect username or password! Please try again.");
        }
      });
  }

  /**
   * Use React Navigation to switch to the Sign Up page.
   */
  handleSignup() {
      console.log("this is the button to handle the signup press")
      this.props.navigation.navigate('SignUp');
      console.log("we are navigating")
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
        <Text>Welcome! Please log in or sign up to continue.</Text>
        <View style={styles.space} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="#992a20"
          onChangeText={(username) => this.setState({ username: username })}
          value={this.state.username}
          autoCapitalize="none" />
        <TextInput style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#992a20"
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
          autoCapitalize="none" />
        <View style={styles.space} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button color="#942a21" style={styles.buttonInline} title="Login" onPress={this.handleLogin} />
          <View style={styles.spaceHorizontal} />
          <Button color="#942a21" style={styles.buttonInline} title="Signup" onPress={this.handleSignup} />
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
  