import React , { Component } from "react";
import fire from "../config/fire";
import About from '../pages/About/About';
import Navbar from './Navbar.css';
import {Link} from 'react-router-dom';




class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}

render()
{
    return(
        <div>
        <header>
                <h2><Link>Online Therapy Portal</Link></h2>
                <nav>
                    
                    <li><Link to="/Home">Home</Link></li>
                    <li>
                    <div class="dropdown">
                          <Link class="dropbtn">Services</Link>
                          <div class="dropdown-content">
                            <Link href="#">Depression Counselling</Link>
                            <Link href="#">Breakup Counselling</Link>
                            <Link href="#">Relationship Counselling</Link>
                            <Link href="#">Relationship Counselling</Link>
                            <Link href="#">Stress Management Counselling</Link>
                            <Link href="#">Anger Management Counselling</Link>
                            <Link href="#">Pre-Marriage Counselling</Link>
                            <Link href="#">Sex Counselling</Link>
                            <Link href="#">Abuse Counselling</Link>
                            <Link href="#">Addiction Counselling</Link>
                            <Link href="#">Anxiety Counselling</Link>

                          </div>
                     </div>
                     </li>

                    <li><Link to="/Journal">Journal</Link></li>
                    <li><Link to="/Notes">Notes</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <l1> <Link onClick={this.logout}>Logout</Link></l1>
                </nav>
            </header>
           <h1>You are logged in !!!</h1>
        </div>
    )
}
}
export default Home;