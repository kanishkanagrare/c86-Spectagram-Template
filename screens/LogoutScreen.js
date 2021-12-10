import React, { Component } from "react";
import { StyleSheet, View, Button, SafeAreaView, Platform, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import firebase from "firebase";
import AppLoading from "expo-app-loading";

export default class Logout extends Component{

  componentDidMount(){
    firebase.auth().signOut()
  }

  render(){
    return(
      <Text>Logout from this device</Text>
    )
  }
}