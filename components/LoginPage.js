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

    onSubmit = event => {
        event.preventDefault();
        console.log("adimiiro")

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
                           onChange={this.onChange}
                           value={this.state.username}
                    />
                    <Text>Password</Text>
                       <TextInput type="password"
                              name="password"
                              onChange={this.onChange}
                              value={this.state.password}
                     />


                      <Button  onClick={this.onSubmit} name="register" title="Register"/>
                      <View style={styles.space}/>
                      <Button  onClick={this.onSubmit} name="login" title="Login"/>



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