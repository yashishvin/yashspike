import MenuasView from './MenuasView';
import OrdersView from './OrdersView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class CombinedViewS extends React.Component
{ constructor(props){
  super(props)
  this.state = {
    token:"",
    username:""
  }

}
 render()
   {
    // The combined view for the Staff is defined here
  //Two tabs are defined here the first tab for viewing and editing the given menu code for this can be found in MenuasView.js this file is common for both the admin and staff
  //The second tab OrdersView is a file defined for the restraunt staff where the staff can change the state of the order code for this can be found in OrdersView.js

    const TabNavigation = createBottomTabNavigator();
     return(
      <TabNavigation.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <TabNavigation.Screen
        name="MenuasView"
         options={{
          tabBarLabel: 'MenuasView',
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          tabBarIcon:({tintColor})=>(  
            <Icon name="running" color={tintColor} size={25}/>  
        )  
          
        }}
      >
         {props=><MenuasView {...props} token={this.props.token} username={this.props.username}/>}
         </TabNavigation.Screen>
      <TabNavigation.Screen
        name="OrdersView"
        options={{
          tabBarLabel: 'OrdersView',
        
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
           tabBarIcon:({tintColor})=>(  
            <Icon name="male" color={tintColor} size={25}/>  
        )  
          
        }}
      >{props => <OrdersView {...props} token={this.props.token} username={this.props.username} />}
      </TabNavigation.Screen>
    </TabNavigation.Navigator>
       );
}
   







}
export default CombinedViewS;