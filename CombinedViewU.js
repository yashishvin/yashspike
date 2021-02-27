import MenuView from './MenuView';
import ProfileView from './ProfileView';
import OrderView from './OrderView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class CombinedViewU extends React.Component
{ constructor(props){
  super(props)
  this.state = {
    token:"",
    username:""
  }

}
  
   render()
   {// The combined view for the User is defined here
  //Three tabs are defined here the first tab being for viewing the given menu code for this can be found in MenuView.js
  //The second tab for viewing the order details this can be found in OrderView.js
  //The third tab for viewing and editing the profile this can be found in ProfileView.js
     
    const TabNavigation = createBottomTabNavigator();
     return(
      <TabNavigation.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <TabNavigation.Screen
        name="MenuView"
         options={{
          tabBarLabel: 'MenuView',
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          
          
        }}
      >
         {props=><MenuView {...props} token={this.props.token} username={this.props.username}/>}

      </TabNavigation.Screen>
      <TabNavigation.Screen
        name="OrderView"
        options={{
          tabBarLabel: 'OrderView',
        
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
           tabBarIcon:({tintColor})=>(  
            <Icon name="running" color={tintColor} size={25}/>  
        )  
          
        }}
      >
       
       {props => <OrderView {...props} token={this.props.token} username={this.props.username} />}

      </TabNavigation.Screen>
      <TabNavigation.Screen
        name="ProfileView"
        options={{
          tabBarLabel: 'ProfileView',
        
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
           tabBarIcon:({tintColor})=>(  
            <Icon name="male" color={tintColor} size={25}/>  
        )  
          
        }}
      >
       
       {props => <ProfileView {...props} token={this.props.token} username={this.props.username} />}

      </TabNavigation.Screen>
   </TabNavigation.Navigator>
       
        
      
      
      
      
      );




   }
   







}
export default CombinedViewU;