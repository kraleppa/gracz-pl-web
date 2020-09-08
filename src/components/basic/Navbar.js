import React from "react";
import LoginNavbar from "./LoginNavbar";
import UserNavbar from "./UserNavbar";

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            loggedIn: null
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem("jwt") )
        if (localStorage.getItem("jwt") != null){
            this.setState({
                isLoggedIn: true,
                loggedIn: localStorage.getItem("username")
            })
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Gracz.pl</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                        </ul>
                        {this.state.loggedIn ? <UserNavbar username={this.state.loggedIn}/> : <LoginNavbar />}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar