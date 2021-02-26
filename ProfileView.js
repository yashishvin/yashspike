import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

class ProfileView extends React.Component {

  /**
   * Specifies the default values that will be shown for a split second
   * while data is loading in from the server.
   */
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password:"",
      PhoneNumber:"",
      Address:""
    }
  }

  
  //The fetch call to get the information about the user goes here
  /*componentDidMount() {
    console.log("here the user name in the component is"+this.props.username)
    fetch('https://mysqlcs639.cs.wisc.edu/users/' + this.props.username, {
      method: 'GET',
      headers: { 'x-access-token': this.props.token }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          firstName: res.firstName,
          lastName: res.lastName,
          goalDailyCalories: res.goalDailyCalories,
          goalDailyProtein: res.goalDailyProtein,
          goalDailyCarbohydrates: res.goalDailyCarbohydrates,
          goalDailyFat: res.goalDailyFat,
          goalDailyActivity: res.goalDailyActivity
        });
      });
  }
*/
  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <View style={styles.space} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Icon name="male" size={40} color="#900" style={{ marginRight: 20 }} />
          <Text style={styles.bigText}>About Me</Text>
        </View>
        <View style={styles.spaceSmall}></View>
        <Text>Let's get to know you!</Text>
        <Text>Specify your information below.</Text>
        <View style={styles.space} />

        <Text style={{ textAlignVertical: "center", fontWeight: "700", fontSize: 20 }}>Personal Information</Text>
        <View style={styles.spaceSmall}></View>
        <View>
          <Text style={{ textAlignVertical: "center", fontWeight: "700" }}>User Name</Text>
        </View>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={this.props.username}
          placeholderTextColor="#d9bebd"
          onChangeText={(userName) => this.setState({ userName: userName})}
          value={this.state.userName}
          autoCapitalize="none" />
        <View style={styles.spaceSmall}></View>

        <View>
          <Text style={{ textAlignVertical: "center", fontWeight: "700" }}>Password</Text>
        </View>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Badger"
          placeholderTextColor="#d9bebd"
          onChangeText={(password) => this.setState({ password:password })}
          value={this.state.password}
          autoCapitalize="none" />
        <View style={styles.spaceSmall}></View>
        <View style={styles.spaceSmall}></View>
        <View>
          <Text style={{ textAlignVertical: "center", fontWeight: "700" }}>Phone Number</Text>
        </View>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="2200213213"
          placeholderTextColor="#d9bebd"
          onChangeText={(PhoneNumber) => this.setState({ PhoneNumber:PhoneNumber})}
          value={this.state.PhoneNumber + ""}
          autoCapitalize="none" />
        <View style={styles.spaceSmall}></View>
        <View>
          <Text style={{ textAlignVertical: "center", fontWeight: "700" }}>Address</Text>
        </View>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Nfrances street"
          placeholderTextColor="#d9bebd"
          onChangeText={(Address) => this.setState({ Address: Address })}
          value={this.state.Address}
          autoCapitalize="none" />

        <Text style={{ fontWeight: "700", fontSize: 20 }}>Looks good! All set?</Text>
        <View style={styles.spaceSmall} />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button color="#942a21" style={styles.buttonInline} title="Save Profile"  />
        </View>
        <View style={styles.space} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get('window').height
  },
  mainContainer: {
    flex: 1
  },
  scrollViewContainer: {},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bigText: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 5
  },
  spaceSmall: {
    width: 20,
    height: 10,
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
  },
  inputInline: {
    flexDirection: "row",
    display: "flex",
    width: 200,
    padding: 10,
    margin: 5,
    height: 40,
    borderColor: '#c9392c',
    borderWidth: 1
  }
});

export default ProfileView;
