import React from "react";
import host from "../util/API";

class UserDetailElement extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            inputType: "text"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.props.apiName === "password"){
            this.setState({inputType: this.props.apiName})
        }
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleClick(){
        if (this.props.apiName === "email" && !this.state.text.includes('@')){
            window.alert("Nieprawidłowy email!");
            return;
        }
        console.log(JSON.parse(`{"${this.props.apiName}": "${this.state.text}"}`))
        fetch(`${host}/api/v1/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            },
            body: `{"${this.props.apiName}": "${this.state.text}"}`
        })
            .then((response) => response.json())
            .then(() => this.setState({
                text: ""
            }))
            .then(() => window.location.reload())
            .catch(() => window.alert("Podany email jest już w użyciu!"))
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.keyElement}</th>
                <td>{this.props.value}</td>
                <td className="text-right">
                    <input type={this.state.inputType} name={"text"} value={this.state.text} onChange={this.handleChange} autoComplete="off"/>
                    <button type="button" className="btn btn-success btn-sm ml-1" onClick={this.handleClick}>Zmień</button>
                </td>
            </tr>
        )
    }
}

export default UserDetailElement;