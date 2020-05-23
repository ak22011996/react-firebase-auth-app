import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import fire from './config/fire';
import Login from './Login'
import Home from './Home'
import Services from './pages/Services/Services.js';
import Journal from './pages/Journal/Journal.js';
import Notes from './pages/Notes/Notes.js';
import About from './pages/About/About.js';


class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (

      <Router>
        <div className="App">
            {this.state.user ? (<Home/>) : (<Login/>)}
            <Route exact path="/Services" component={Services}/>  
            <Route exact path="/Journal" component={Journal}/>  
            <Route exact path="/Notes" component={Notes}/>  
            <Route exact path="/About" component={About}/>  
       </div>
    </Router>  
      
    );
  }
}

export default App;
