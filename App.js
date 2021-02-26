import React from 'react';
import LoginView from './LoginView';
import SignupView from './SignupView';
import CombinedViewA from './CombinedViewA';
import CombinedViewS from './CombinedViewS';
import CombinedViewU from './CombinedViewU';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Image, View, Text } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accessToken: undefined,
      username: undefined
    }

    this.login = this.login.bind(this);
    this.revokeAccessToken = this.revokeAccessToken.bind(this);
  }

  /**
   * Store the username and accessToken here so that it can be
   * passed down to each corresponding child view.
   */
  login(username, accessToken) {
    this.setState({
      username: username,
      accessToken: accessToken
    });
    console.log("the state to which the token is being set to is"+accessToken);
  }

  revokeAccessToken() {
    console.log("this is executed on the click of the Icon")
    this.setState({
      accessToken: undefined
    });
  }

  render() {

//intitializing the stack navigator
 //below on one stack we have the signin page,signup page and the combined view pages for the adminstrator,User and the staff defined
 //CombineViewU,CombineViewA,CombinedViewS are three components which have the tab naviagots defined for the User,Admin,Staff respectively
    let AuthStack = createStackNavigator();
   

    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          {
            <>
              <AuthStack.Screen
                name="SignIn"
                options={{
                  title: 'Badger Bytes Signin Page',
                }}
              >
                {(props) => <LoginView {...props} login={this.login} />}
              </AuthStack.Screen>

              <AuthStack.Screen
                name="SignUp"
                options={{
                  title: 'Badger Bytes Signup Page',
                }}
              >
                {(props) => <SignupView {...props} />}
              </AuthStack.Screen>
              <AuthStack.Screen
                name="UserView"
                options={{
                  title: 'Badger Bytes User Page',
                }}
              >
                {(props) => <CombinedViewU token={this.state.accessToken} username={this.state.username}/>}
              </AuthStack.Screen>
              <AuthStack.Screen
                name="StaffView"
                options={{
                  title: 'Badger Bytes Staff Page',
                }}
              >
                {(props) =><CombinedViewS token={this.state.accessToken} username={this.state.username} />}
              </AuthStack.Screen>
              <AuthStack.Screen
                name="AdminView"
                options={{
                  title: 'Badger Bytes Admin Page',
                }}
              >
                {(props) =><CombinedViewA token={this.state.accessToken} username={this.state.username}/>}
              </AuthStack.Screen>
            </>
         }
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
