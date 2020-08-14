import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-blue">
                    <Link to='/'>
                        <a className="navbar-brand">Gracz.pl</a>
                    </Link>

                    <Link to="/add">
                        <a className="navbar-brand">Dodaj gre</a>
                    </Link>

                </nav>
            </div>
        )
    }
}

export default Navbar