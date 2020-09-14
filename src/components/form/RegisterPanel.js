import React from "react";
import host from "../util/API";

class RegisterPanel extends React.Component {
    constructor() {
        super();
        this.state={
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            name: "",
            surname: "",
            address: "",
            zip: "",
            city: "",
            error: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        if (this.state.password !== this.state.passwordConfirm){
            this.setState({error: "Błąd w potwierdzeniu hasła"})
        }

        const json = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            address: this.state.address,
            zip: this.state.zip,
            city: this.state.city,
        }

        console.log(json)

        fetch(`${host}/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        })
            .then(request => request.json())
            .then(() => {window.location.href="/login"; alert("Rejestracja przebiegła pomyślnie!")})
            .catch(error => {this.setState({error: "Błędny login lub email"}); console.log(error)})

    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center mt-5 mb-4" style={{color: "#3631C2"}}>Rejestracja</h2>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" className="form-control" placeholder="Nazwa użytkownika"
                                   name={"username"} value={this.state.username} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="email" className="form-control" placeholder="Email"
                                   name={"email"} value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="password" placeholder="Hasło" className="form-control"
                                   name={"password"} value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="password" placeholder="Potwierdź hasło" className="form-control"
                                   name={"passwordConfirm"} value={this.state.passwordConfirm} onChange={this.handleChange}required/>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <h6>Dane do wysyłki</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" placeholder="Imię" className="form-control"
                                   name={"name"} value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" placeholder="Nazwisko" className="form-control"
                                   name={"surname"} value={this.state.surname} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" placeholder="Adres" className="form-control"
                                   name={"address"} value={this.state.address} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" placeholder="Miasto" className="form-control"
                                   name={"city"} value={this.state.city} onChange={this.handleChange} required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 form-group">
                            <input type="text" placeholder="Kod pocztowy" className="form-control"
                                   name={"zip"} value={this.state.zip} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group text-center">
                            <button className="btn button-standard" type="submit">Zarejestruj</button>
                        </div>
                        <div className="alert alert-danger col-12 col-md-6 offset-md-3 text-center" role="alert"
                            style={{visibility: this.state.error === null ? "hidden" : "visible"}}>
                            {this.state.error}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterPanel;