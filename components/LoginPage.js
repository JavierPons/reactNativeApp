import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class LoginPage extends Component{
    constructor(props){
            super(props);
            this.state = {
                username: "",
                password: ""
            }
    }
    onChange = event => {
            this.setState({
                [event.target.name]:event.target.value
            })
    }
    handleUsername = input => {
            this.setState({
                username: input
            })
    }
    handlePassword = input => {
                this.setState({
                    password: input
                })
        }

    onSubmit = event => {
        event.preventDefault();

        let user = {
            username:this.state.username,
            password:this.state.password
        }
        if(event.target.name === 'register'){
            this.props.register(user);
        }else {
            this.props.login(user)
        }

    }

    render(){

        return (
            <View style={{width:100, margin:"auto"}}>

                   <Text>Username</Text>
                    <TextInput type="text"

                           name="username"
                           onChangeText={this.handleUsername}
                           value={this.state.username}
                    />
                    <Text>Password</Text>
                       <TextInput type="password"
                              secureTextEntry={true}
                              name="password"
                              onChangeText={this.handlePassword}
                              value={this.state.password}
                     />


                      <Button  onPress={this.onSubmit} name="register" title="Register"/>
                      <View style={styles.space}/>
                      <Button  onPress={this.onSubmit} name="login" title="Login"/>



            </View>

        )
    }

}

const styles = StyleSheet.create({

  space: {
    width:20,
    height:20
  }
});