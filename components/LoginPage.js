import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

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

    onSubmitRegister = event => {
        event.preventDefault();

        let user = {
            username:this.state.username,
            password:this.state.password
        }
            this.props.register(user);

    }

     onSubmitLogin = event => {
            event.preventDefault();

            let user = {
                username:this.state.username,
                password:this.state.password
            }
                this.props.login(user)
        }

    render(){

        return (
            <View style={{width:100, margin:"auto"}}>

                   <Text>Username</Text>
                    <TextInput type="text"

                           name="username"
                           onChangeText={this.handleUsername}
                           value={this.state.username}
                           placeholder="Username"
                    />
                    <Text>Password</Text>
                       <TextInput type="password"
                              secureTextEntry={true}
                              name="password"
                              onChangeText={this.handlePassword}
                              value={this.state.password}
                              placeholder="Password"
                              secureTextEntry={true}
                     />


                      <Button  onPress={this.onSubmitRegister} name="register" title="Register"/>
                      <View style={styles.space}/>
                      <Button  onPress={this.onSubmitLogin} name="login" title="Login"/>

                      {/* <LoginButton
                            onLoginFinished={
                                (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())
                                    }
                                    )
                                }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")}/> */}

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