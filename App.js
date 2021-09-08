import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput,  TouchableOpacity, StyleSheet,Button,Text,LabelSelect} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const LoginScreen = () => {
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      <Text>Login Screen</Text>
    </View>
  );
}

const HomeScreen = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const [pickerValue, setPickerValue] = useState('select  gender')
  const [gender,setGender] = useState('')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

      <Text style={{ color: 'red', right: 140, fontSize: 15 }}>Name</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />


      <Text style={{ color: 'red', right: 140, fontSize: 15 }}>Email</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />




      <Text style={{ color: 'red', right: 135, fontSize: 15 }}>Gender</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />


      <Text style={{ color: 'red', right: 135, fontSize: 15 }}>contact num</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />

      <Text style={{ color: 'red', right: 135, fontSize: 15 }}>adress</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />
      <Text style={{ color: 'red', right: 135, fontSize: 15 }}>Gender</Text>
      <TextInput
        placeholder='enter the name'
        onChangeText={(text) => { this.setstate({ name: text }) }}
        style={{ width: 320, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', margin: 5 }} />



      <Text style={{ color: 'red', right: 140, fontSize: 15 }}>DOB</Text>
      <TextInput
        placeholder='select  date'
        style={{ width: 150, height: 35, borderWidth: 2, color: 'green', borderColor: 'black', marginRight: 170 }} />

      <Button style={{ width: 150, height: 10 }} title="Select Date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />


      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>


    </View>
  );
}


const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>


    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Top = createMaterialTopTabNavigator();

const Containers = () => {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen name="Login" component={LoginScreen} />
        <Top.Screen name="Home" component={HomeScreen} />
        <Top.Screen name="About" component={AboutScreen} />
        <Top.Screen name="Detail" component={DetailScreen} />
      </Top.Navigator>
    </NavigationContainer>
  );
}

export default Containers;

const styles = StyleSheet.create({
  btnSubmit: {
    width: 350,
    height: 40,
    borderColor: 'black',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    marginStart: 10,
    marginEnd: 10,

  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.8
  },
  picker: {
    width: 300, height: 45, borderWidth: 2, backgroundColor: 'red', color: 'green', borderColor: 'red', margin: 5
  },
});

