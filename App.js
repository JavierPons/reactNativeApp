import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import LoginPage from './components/LoginPage'
import MyCalendar from './components/MyCalendar'
 // <LoginPage register={this.register} login={this.login}/>   
 class App extends Component{

        constructor(props){
                super(props);
                this.state = {
                    list:[],
                    isLogged:false,
                    token:""
                }
        }
 
 
 
 
 
 
 
 
 

        saveToStorage = () => {
        		sessionStorage.setItem("state",JSON.stringify(this.state));
        	}

        	clearState = () => {
        		this.setState({
        			list:[],
        			isLogged:false,
        			token:""
        		}, () => {
        			this.saveToStorage();
        		})
        	}
       register = user => {
            let request = {
                method: "POST",
                mode:'cors',
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(user)
            }
            fetch("http://192.168.1.243:3009/register", request).then(response => {
                if(response.ok){
                    alert("Register Success!")
                }else {
                    console.log("Server responded with a status: ",response.status)
                }
            }).catch(error => {
                console.log("There was an error. Error: ", error)
            })
       }

       login = user => {
            let request = {
                method:"POST",
                headers: {"Content-type":"application/json"},
                body:JSON.stringify(user)
            }
            fetch("http://192.168.1.243:3009/login", request).then(response => {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({
                            isLogged:true,
                            token:data.token
                        }, () => {
                            this.saveToStorage();

                        })
                    }).catch(error => {
                        console.log("Failed to parse JSON, Reason:", error)
                    })
                }else {
                    console.log("Server responded with a status:", response.status)
                }
            }).catch(error => {
                console.log("There was an error. Error:", error)
            })
       }

 render(){
      return (

         <View style={styles.container}>
           <MyCalendar/>
            <StatusBar style="auto" />
         </View>
       );
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;