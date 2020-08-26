import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-blue">
                    <Link to='/'>
                        <span className="navbar-brand">Gracz.pl</span>
                    </Link>

                    <Link to='/add'>
                        <span className="navbar-brand"><small>Dodaj grę</small></span>
                    </Link>

                </nav>
            </div>
        )
    }
}

export default Navbar