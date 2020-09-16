import React from "react";
import host from "../util/API";
import UserDetailElement from "./UserDetailElement";

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
                                <td>{this.props.value}</td>
                            </tr>
                            <UserDetailElement keyElement="Email" value={this.state.email} apiName={"email"} refresh={this.refresh}/>
                            <UserDetailElement keyElement="Hasło" value={""} apiName={"password"}/>
                            <tr>
                                <div className="mb-4 mt-5"><h5>Dane do wysyłki</h5></div>
                            </tr>
                            <UserDetailElement keyElement="Imie" value={this.state.name} apiName={"name"}/>
                            <UserDetailElement keyElement="Nazwisko" value={this.state.surname} apiName={"surname"}/>
                            <UserDetailElement keyElement="Adres" value={this.state.address} apiName={"address"}/>
                            <UserDetailElement keyElement="Miasto" value={this.state.city} apiName={"city"}/>
                            <UserDetailElement keyElement="Kod pocztowy" value={this.state.zip} apiName={"zip"}/>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserDetails;