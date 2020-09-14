import React from "react";
import host from "../util/API";

class UserDetails extends React.Component {
    constructor() {
        super();
        this.state={
            username: "",
            email: "",
            name: "",
            surname: "",
            address: "",
            city: "",
            zip: ""
        }
    }

    componentDidMount() {
        fetch(`${host}/api/v1/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
            },
        })
            .then(response => response.json())
            .then(data => this.setState({
                username: data.username,
                email: data.email,
                name: data.name,
                surname: data.surname,
                address: data.address,
                city: data.city,
                zip: data.zip
            }))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 mt-5">
                        <div className="mb-4"><h5>Dane konta</h5></div>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th scope="row">Nazwa użytkownika</th>
                                <td>{this.state.username}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{this.state.email}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Hasło</th>
                                <td> </td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <div className="mb-4 mt-5"><h5>Dane do wysyłki</h5></div>
                            </tr>
                            <tr>
                                <th scope="row">Imie</th>
                                <td>{this.state.name}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nazwisko</th>
                                <td>{this.state.surname}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Adres</th>
                                <td>{this.state.address}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Miasto</th>
                                <td>{this.state.city}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Kod pocztowy</th>
                                <td>{this.state.zip}</td>
                                <td className="text-right">
                                    <button className="btn btn-success btn-sm" >Zmień</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserDetails;