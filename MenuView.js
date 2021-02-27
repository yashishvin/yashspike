import Menudisplay from './Menudisplay'
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
//using this component we get the data and pass it to the Menu displaycomponent Menudisplay which is responsible for displaying the Menu
class MenuView extends React.Component {

  
   
  constructor(props) {
    super(props);
    this.state = {
      Nameoftheitem: "",
      url: "",
      Cost: 0.0,
      OrderStatus:"Order Placed",
      time:" ",
      name:"",
      activity:[]
    }
  }

  /**
   * The fecth Api call to get the menu for the user goes here
   * We want to keep the Api calls in here as the menu must be loaded as soon as the data is fetched from the API
   *  
   */
  
   /*componentDidMount()
   {
        
    this._navListener = this.props.navigation.addListener('focus', () => {
        this.GetInfo();
    })
   }*/
   GetInfo()
   { console.log("this is the get info method and it has been called")
     fetch('https://mysqlcs639.cs.wisc.edu/activities', {
       method: 'GET',
       headers: {
            'x-access-token': this.props.token 
       }
     })
       .then(res => res.json())
       .then(data => {
            this.setState({activity:data.activities});
          
       });
    
      

}







   componentDidMount()
    {
       
       this._navListener = this.props.navigation.addListener('focus', () => {
           this.GetInfo();
       })
   



   }
  
   
  
  fetch()
  {
    
    var c=[]
    c=this.state.activity
    var i
    var disp=[]
    for (i in c)
    { 
     disp.push(<Menudisplay username={this.props.username} name={c[i].name}  OrderStatus={c[i].duration} cost={c[i].calories}/>)
    }

   return disp;
  }
 
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
         <Text style={styles.text}>This is the Menu</Text>
         {this.fetch()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   mainContainer: {
    flex: 1
  },
  text:
  {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});
export default MenuView;

