import React from 'react';
import {  View, Button, Text } from 'react-native';
import { Link } from "react-router-native";
export default class Logout extends React.Component  {
        render(){
                if(this.props.isLogged){
                        return(
                            <View>
                              <Link to="/" onPress={()=> this.props.logout} >
                              <Text>Logout</Text></Link>
                            </View>
                        )
                } else {
                        return(
                            <View></View>
                        )
                }

        }

}