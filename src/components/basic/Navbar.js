import React from "react";
import LoginNavbar from "./LoginNavbar";
import UserNavbar from "./UserNavbar";
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            loggedIn: null
        }
    }

    componentDidMount() {
        console.log(sessionStorage)
        if (sessionStorage.getItem("jwt") != null){
            this.setState({
                isLoggedIn: true,
                loggedIn: sessionStorage.getItem("username")
            })
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/" >
                        <img src={logo} width="80" height="70" alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="/">Strona główna</a>
                            </li>
                            { this.state.loggedIn &&
                            <li className="nav-item">
                                <Link to={'/userdetails'}>
                                    <a className="nav-link">Moje konto</a>
                                </Link>
                            </li>
                            }
                            {this.state.loggedIn &&
                            <li className="nav-item">
                                <a className="nav-link" href="/">Moje zamówienia</a>
                            </li>
                            }
                            {sessionStorage.getItem("role") === "ROLE_ADMIN" &&
                            <li className="nav-item">
                                <Link to='/add'>
                                    <a className="nav-link">Dodaj grę</a>
                                </Link>
                            </li>
                            }
                        </ul>
                        {this.state.loggedIn ? <UserNavbar username={this.state.loggedIn}/> : <LoginNavbar />}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar