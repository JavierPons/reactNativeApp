import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route, Redirect} from 'react-router-native';
import LoginPage from './components/LoginPage'
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

       login = user => {
            let request = {
                method:"POST",
                headers: {"Content-type":"application/json"},
                body:JSON.stringify(user)
            }
            fetch("/login", request).then(response => {
                if(reponse.ok){
                    reponse.json().then(data => {
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
          <LoginPage login={this.login}/>
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