import React from "react";


class UserNavbar extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        sessionStorage.clear()
        window.location.reload(false);
    }

    render() {
        return (
            <span className="navbar-text" style={{color: "white"}}>

                Witaj {this.props.username}!
                <button className="btn btn-outline-light my-2 my-sm-0 ml-4" type="submit" onClick={this.handleClick}>Wyloguj</button>
            </span>
        )
    }
}

export default UserNavbar