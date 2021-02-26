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
      OrderStatus:"Order Placed"
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
  

  
  fetch()
  {
    var ar= {
      Order:[{
      "name":"MCD",
      "URL":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.newfoodmagazine.com%2Fwp-content%2Fuploads%2Fmcdonalds-750x450.jpg&imgrefurl=https%3A%2F%2Fwww.newfoodmagazine.com%2Farticle%2F94705%2Fmcdonalds-joins-the-plant-revolution%2F&tbnid=sUnW8kemQ3BibM&vet=12ahUKEwiPvqPsnobvAhXCRawKHWVmBIUQMygDegUIARDXAQ..i&docid=YHQN16Ip8-Q9bM&w=750&h=450&q=mcdonalds&safe=active&ved=2ahUKEwiPvqPsnobvAhXCRawKHWVmBIUQMygDegUIARDXAQ",
      "OrderStatus":'order placed'
      }]
    }
    var c=[]
    c=ar.Order
    var i
    var disp=[]
    for (i in c)
    { console.log("this has been executed");
     disp.push(<Menudisplay name={c[i].name} url={c[i].URL} OrderStatus={c[i].OrderStatus}/>)
    }

   return disp;
  }
  render() {
    return (
      <ScrollView style={styles.mainContainer} >
         <Text>This is the Menu</Text>
         {this.fetch()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1
  },
});

export default MenuView;
