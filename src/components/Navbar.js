import  Logo  from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        
    }
    
    
    state={
        isOpen:false
    } 
    handleTogle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                <Link to="/">
                        <img src={Logo} alt="logo"/>
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleTogle}>
                    <FaAlignRight className="nav-icon"/>
                </button>
                    </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
                </div>
                
                
    
                
            </nav>
        )
    }

}