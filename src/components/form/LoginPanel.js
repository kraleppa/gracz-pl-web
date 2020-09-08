import React from "react";

class LoginPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: "hidden"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        const json = {
            username: this.state.username,
            password: this.state.password
        }

        fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        })
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('jwt', data.jwt);
                sessionStorage.setItem('username', this.state.username);
                window.location.href="/";
            })
            .catch(() => this.setState({
                username: "",
                password: "",
                error: "visible"
            }))
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center mt-5 mb-4" style={{color: "#3631C2"}}>Login</h2>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" className="form-control" placeholder="Nazwa"
                                   name={"username"} value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="password" placeholder="Hasło" className="form-control"
                                   name={"password"} value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group text-center">
                            <button className="btn button-standard" type="submit">Zaloguj</button>
                        </div>
                        <div className="alert alert-danger col-12 col-md-6 offset-md-3 text-center" role="alert"
                            style={{visibility: this.state.error}}>
                            Zła nazwa użytkownika lub hasło
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPanel;