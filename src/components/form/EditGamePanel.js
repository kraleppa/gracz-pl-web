import React from "react";
import host from "../util/API";
import GameAddPanel from "./GameAddPanel";

class EditGamePanel extends GameAddPanel {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0.0,
            genre: "ACTION",
            console: "PLAYSTATION_4",
            description: "",
            imageUrl: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch(`${host}/api/v1/games/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name,
                price: data.price,
                genre: data.genre,
                console: data.console,
                description: data.description,
                imageUrl: data.imageUrl
            }))
    }


    handleChange(event){
        const {name, value, type} = event.target;
        type === "number" ? this.setState({[name]: parseFloat(value)}) : this.setState({[name]: value})
    }

    handleSubmit(){
        console.log(this.state.id)
        fetch(`${host}/api/v1/games/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    name: data.name,
                    price: data.price,
                    genre: data.genre,
                    console: data.console,
                    description: data.description,
                    imageUrl: data.imageUrl
                })
                console.log(data)
            })
            .catch((error) => {
                this.setState({
                    name: "ERROR",
                    price: 0.0,
                    genre: "ACTION",
                    console: "PLAYSTATION_4",
                    description: "",
                    imageUrl: "",
                })
                console.log(error)
            });
    }
}

export default EditGamePanel