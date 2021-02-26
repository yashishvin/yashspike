import MenuasView from './MenuasView';
import ReportView from './ReportView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, Image, View, Text, ScrollView,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class CombinedViewA extends React.Component
{ constructor(props){
  super(props)
  this.state = {
    token:"",
    username:""
  }

} 

render()
{ // The combined view for the adminstrator is defined here
  //Two tabs are defined here the first tab being for viewing and editing the given menu code for this can be found in MenuasView
  //The second tab for viewing and printing the usage reports code can be found in ReportView.js
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
        name="UsageReport"
        options={{
          tabBarLabel: 'UsageReport',
        
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
           tabBarIcon:({tintColor})=>(  
            <Icon name="male" color={tintColor} size={25}/>  
        )  
          
        }}
      >
       
       {props => <ReportView {...props} token={this.props.token} username={this.props.username}/>}

      </TabNavigation.Screen>




   </TabNavigation.Navigator>)

}
  
  
   }
   const styles = StyleSheet.create({
  
    mainContainer: {
      flex: 1
    },
  });
export default CombinedViewA;