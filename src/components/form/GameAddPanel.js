import React from "react";
import host from "../util/API";

class GameAddPanel extends React.Component{
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

    handleChange(event){
        const {name, value, type} = event.target;

        type === "number" ? this.setState({[name]: parseFloat(value)}) : this.setState({[name]: value})
    }

    handleSubmit(){
        console.log("eeee")
        fetch(`${host}/api/v1/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    name: "",
                    price: 0.0,
                    genre: "ACTION",
                    console: "PLAYSTATION_4",
                    description: "",
                    imageUrl: "",
                })
                console.log(data)
            })
            .catch((error) => {
                this.setState({
                    name: "",
                    price: 0.0,
                    genre: "ACTION",
                    console: "PLAYSTATION_4",
                    description: "",
                    imageUrl: "",
                })
                console.log(error)
            });
    }

    render() {
        return (
            <div className="container">

            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form01">Nazwa gry</label>
                        <input type="text" className="form-control" id="form01" name="name" value={this.state.name}
                               placeholder="Uncharted 4" onChange={this.handleChange} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form02">Cena</label>
                        <input type="number" className="form-control" id="form02" name={"price"} value={this.state.price}
                               placeholder="69.99" onChange={this.handleChange} min="0" step="0.01" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form03">Gatunek</label>
                        <select className="custom-select" id="form03" onChange={this.handleChange} value={this.state.genre}
                            name="genre" required>
                            <option value="ACTION">Akcja</option>
                            <option value="RPG">RPG</option>
                            <option value="ADVENTURE">Przygodowa</option>
                            <option value="SHOOTING">Strzelanka</option>
                            <option value="STRATEGY">Strategia</option>
                            <option value="SIMULATOR">Symulator</option>
                            <option value="CASUAL">Casualowa</option>
                            <option value="SPORTS">Sport</option>
                            <option value="ARCADE">Arkadowa</option>
                            <option value="RACING">Wyścigowa</option>
                            <option value="HORROR">Horror</option>
                            <option value="MMO">MMO</option>
                            <option value="FIGHTING">Bijatyka</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form04">Konsola</label>
                        <select className="custom-select" id="form04" onChange={this.handleChange}
                                name="console" value={this.state.console}>
                            <option value="PLAYSTATION_4">Playstation 4</option>
                            <option value="XBOX_ONE">Xbox One</option>
                            <option value="NINTENDO_SWITCH">Nintendo Switch</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form05">Opis</label>
                        <textarea className="form-control" id="form05" rows="10" name="description" value={this.state.description}
                            onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-6 mt-4 offset-3">
                        <label htmlFor="form06">URL Zdjęcia</label>
                        <input type="url" className="form-control" id="form06" name={"imageUrl"} value={this.state.imageUrl}
                               placeholder="https://photo.jpg" onChange={this.handleChange} required />
                    </div>
                </div>

                <div className="form-row text-center mt-5">
                    <div className="col-12">
                        <button className="btn button-standard" type="submit">Zapisz</button>
                    </div>

                </div>
            </form>
            </div >
        )
    }

}

export default GameAddPanel