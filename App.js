import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import LoginPage from './components/LoginPage'
import MyCalendar from './components/MyCalendar'
import Logout from './components/Logout'

 // <LoginPage register={this.register} login={this.login}/>     <MyCalendar/>      <StatusBar style="auto" />
 class App extends Component{

        constructor(props){
                super(props);
                this.state = {
                    list:[],
                    isLogged:false,
                    token:""
                }
        }


        	clearState = () => {
        		this.setState({
        			list:[],
        			isLogged:false,
        			token:""
        		})
        	}
       register = user => {
            let request = {
                method: "POST",
                mode:'cors',
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(user)
            }
            fetch("https://backendandroid.herokuapp.com/register", request).then(response => {
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
            fetch("https://backendandroid.herokuapp.com/login", request).then(response => {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({
                            isLogged:true,
                            token:data.token
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

    logout = () => {
            let request = {
                method: "POST",
                mode: "cors",
                headers: {"Content-type":"application/json",
                "token": this.state.token}
            }
            fetch("https://backendandroid.herokuapp.com/logout", request).then(response => {
                    if(response.ok){
                        this.clearState();
                    } else {
                        this.clearState();
                        console.log("Server responded with a status:", response.status)
                    }
            }).catch(error => {
                console.log("There was an error:", error);
                this.clearState();
            })
    }

 render(){
      return (
          <NativeRouter>
                 <View style={styles.container}>
                 <Logout isLogged={this.state.isLogged} logout={this.logout}/>
                 <Switch>
                   <Route exact path="/" render={()=> this.state.isLogged ?
                          (<Redirect to="/calendar"/>) :
                         ( <LoginPage register={this.register} login={this.login}/>)}  />
                   <Route path="/calendar" render={()=> this.state.isLogged ?
                    ( <MyCalendar/>) :
                    (<Redirect to="/"/>)
                   }  />

                          <StatusBar style="auto" />
                 </Switch>
                 </View>
          </NativeRouter>
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