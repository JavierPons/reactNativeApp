import React from 'react';
import {  View, Button, Text, TouchableOpacity } from 'react-native';
import { Link, Route } from "react-router-native";

export default class Logout extends React.Component  {
        render(){
                if(this.props.isLogged){
                        return(

                            <View>
                              <Link onPress={()=>  history.push("/"), this.props.logout}   >
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