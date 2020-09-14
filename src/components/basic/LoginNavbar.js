import React from "react";
import {Link} from "react-router-dom";

class LoginNavbar extends React.Component {
    render() {
        return (
            <span className="navbar-text">
                <Link to={'/login'} >
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Zaloguj</button>
                </Link>
                <Link to={'/register'}>
                    <button className="btn btn-outline-light my-2 my-sm-0 ml-4" type="submit">Zarejestruj</button>
                </Link>

            </span>
        )
    }
}

export default LoginNavbar